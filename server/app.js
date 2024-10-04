require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer=require("nodemailer")
const mongoose=require("mongoose");
const { Car } = require('./mongoOperations');
const test = require('dotenv').config()
const DB_URI = process.env.DB_URI




const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const EMAIL_USER=process.env.EMAIL_USER
const EMAIL_PASS=process.env.EMAIL_PASS








// const exampleCar = {
//   year: 2021,
//   price: 25000,
//   damages: "Minor scratches on the right side",
//   mileage: 15000,
//   fuelType: 'Gasoline',
//   brand: 'Toyota',
//   model: 'Camry',
//   hp: 203,
//   images: [
//       "https://example.com/images/toyota-camry-front.jpg",
//       "https://example.com/images/toyota-camry-side.jpg"
//   ]
// };
// const carExamples = [
//   {
//     year: 2020,
//     price: 30000,
//     damages: "Rear bumper damage",
//     mileage: 20000,
//     fuelType: 'Diesel',
//     brand: 'Ford',
//     model: 'F-150',
//     hp: 290,
//     images: [
//       "https://example.com/images/ford-f150-front.jpg",
//       "https://example.com/images/ford-f150-side.jpg"
//     ]
//   },
//   {
//     year: 2019,
//     price: 22000,
//     damages: "Scratches on the left door",
//     mileage: 35000,
//     fuelType: 'Gasoline',
//     brand: 'Honda',
//     model: 'Civic',
//     hp: 158,
//     images: [
//       "https://example.com/images/honda-civic-front.jpg",
//       "https://example.com/images/honda-civic-side.jpg"
//     ]
//   },
//   {
//     year: 2021,
//     price: 45000,
//     damages: "No visible damages",
//     mileage: 5000,
//     fuelType: 'Electric',
//     brand: 'Tesla',
//     model: 'Model 3',
//     hp: 283,
//     images: [
//       "https://example.com/images/tesla-model3-front.jpg",
//       "https://example.com/images/tesla-model3-side.jpg"
//     ]
//   },
//   {
//     year: 2018,
//     price: 18000,
//     damages: "Front windshield cracked",
//     mileage: 60000,
//     fuelType: 'Gasoline',
//     brand: 'Nissan',
//     model: 'Altima',
//     hp: 179,
//     images: [
//       "https://example.com/images/nissan-altima-front.jpg",
//       "https://example.com/images/nissan-altima-side.jpg"
//     ]
//   },
//   {
//     year: 2022,
//     price: 32000,
//     damages: "Minor scratches on the bumper",
//     mileage: 10000,
//     fuelType: 'Hybrid',
//     brand: 'Toyota',
//     model: 'Prius',
//     hp: 121,
//     images: [
//       "https://example.com/images/toyota-prius-front.jpg",
//       "https://example.com/images/toyota-prius-side.jpg"
//     ]
//   }
// ];
// for(let element of carExamples){
//   testCarUpload(element)
// }

// async function testCarUpload(carData){
//   try {
//     const uploadingCar=await new Car(carData)
//     await uploadingCar.save()
//     console.log('Car added')

//   } catch (error) {
//     console.log(error)
//   }
// }
// testCarUpload()


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS  
    }
});

app.get("/currentOffers",async (req,res)=>{
  try {
    const allVehicles=await Car.find()
    res.status(200).send(allVehicles)
  } catch (error) {
    res.status(400).send(error)
  }
})


app.get("/offers/:id",async (req,res)=>{
  const id=req.params.id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid vehicle ID format" });
  }
  try {

    const particularCar=await Car.findOne({_id:id})
    if(!particularCar){
      res.status(400).json({error:"Invalid vehicle ID"})
    }else{
      
      res.status(200).json(particularCar)
    }
  } catch (error) {
    res.status(400).json({error:error})
  }
})


app.post("/contacts", (req, res) => {
  
  const { firstName, lastName, phoneNumber, email,brand,model,budget } = req.body;
  

  const mailOptions = {
    
    from: EMAIL_USER, 
    to: email, 
    subject: 'Focus Car Dealership News',
    html: `<img src="https://drive.google.com/uc?export=view&id=14S9Q-p2IpbiW1hJLsYBfoMlaCqmZOZAO" alt="Focus Dealership logo"> <br/>
<p>Hello, <strong>${firstName}</strong>.</p>
<p>We successfully received your message about a/an ${brand} ${model} with a max price of ${budget} leva and we're already on the lookout for your new car.</p>
<p>You will receive a call from us shortly.</p>
<p>Thank you for contacting us!</p>`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: "Error sending email." });
    }else{
      res.status(200).json({ message: "Form submitted successfully!" });
    }
    
    
});
  
});
// mongoose.connect("mongodb://localhost:27017/Focus")
//   .then(()=>app.listen(3000, () => {
//     console.log("Connected to DB")
//     console.log("Listening to port 3000");
//   }))
//   .catch((err)=>console.error(err))
mongoose.connect(DB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
  });

