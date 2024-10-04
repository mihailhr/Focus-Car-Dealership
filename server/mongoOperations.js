const mongoose=require("mongoose")

const CarSchema=new mongoose.Schema({
    year:{type:Number,required:true,min:1900,max:new Date().getFullYear()},
    price:{type:Number,required:true,min:3000,max:500000},
    damages:{type:String,maxlength:60},
    mileage:{type:Number,required:true,min:0,max:800000},
    fuelType:{type:String,enum: ['Gasoline', 'Diesel', 'Electric', 'Hybrid', 'LPG', 'CNG'],required:true},
    brand:{type:String,required:true,minlength:2,maxlength:25},
    model:{type:String,required:true,minlength:2,maxlength:25},
    hp:{type:Number,required:true,min:50,max:2000},
    images:{type:Array,required:true}

})

const Car=new mongoose.model("Car",CarSchema)
module.exports={Car}