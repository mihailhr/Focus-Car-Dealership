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


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS  
    }
});

const welcomeMessage =  `
<p>






  ===============================================<br>
  |                                             |<br>
  |  W E L C O M E   T O   F O C U S            |<br>
  |                                             |<br>
  |  C A R   D E A L E R S H I P'S S E R V E R  |<br>
  |                                             |<br>
  ===============================================<br>
</p>

<h1>You might want to check out:</h1> <br>
<a href="https://focus-car-dealership.onrender.com/currentOffers">The current cars available</a><br>
<a href="https://focus-car-dealership.onrender.com/offers/66fd6b33ab33fdc818c7699d">A particular car</a>
`;
    app.get("/",(req,res)=>{
      res.status(200).send(`<pre>${welcomeMessage}</pre>`)
    })


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
    html: `<img src="cid:logo" alt="Focus Dealership logo"> <br/>
<p>Hello, <strong>${firstName}</strong>.</p>
<p>We successfully received your message about a/an ${brand} ${model} with a max price of ${budget} leva and we're already on the lookout for your new car.</p>
<p>You will receive a call from us shortly.</p>
<p>Thank you for contacting us!</p>`,
attachments: [{
  filename: 'Focus.png',
  path: './images/Focus.png',  
  cid: 'logo' 
}]
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
