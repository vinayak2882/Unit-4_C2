const express = require("express");
const { appendFile } = require("fs");
const mongoose = require("mongoose");
const { stringify } = require("querystring");


const connect =()=>{
    return mongoose.connect("mongodb+srv://Vinayak2882:VIna@2882@cluster0.mcpnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
};

//user schema

const userSchema = new mongoose.Schema({
    firstName:{type:String, required:true },
    middleName:{type:String, required:false },
    lastName:{type:String, required:true },
    age:{type:String, required:true },
email:{type:String, required:true },
address:{type:String, required:true },
gender:{type:String, required:false , default:female },
type:{type:String, required:false }
},
{
    timestamps:true
});

//creating Model
const User= mongoose.model("User",userSchema);

//BranchDetail schema

const branchSchema = new mongoose.Schema({
    name:{type:String, required:true },
    address :{type:String, required:true },
    IFSC :{type:String, required:true },
    MICR :{type:Number, required:true },
},
{
    timestamps:true
})

//creating Model
const Branch= mongoose.model("Branch",branchSchema);

//MasterAccount schema

const MasterSchema = new mongoose.Schema({
    balance :{ required:true },
   
},
{
    timestamps:true
})

//creating Model
const Master= mongoose.model("Master",MasterSchema);

//SavingsAccount schema

const savingSchema = new mongoose.Schema({
    account_number :{ required:true, unique:true },
    balance  :{ required:true },
    interestRate  :{ required:true },
   
},
{
    timestamps:true
});

//creating Model
const Saving= mongoose.model("Saving",savingSchema);

//FixedAccount schema

const fixedSchema = new mongoose.Schema({
    account_number :{type:String, required:true, unique:true},
    balance :{type:String, required:true },
    interestRate :{type:String, required:true },
    startDate :{type:String, required:true },
maturityDate :{type:String, required:true },

},
{
    timestamps:true
})

//creating Model
const Fixed= mongoose.model("Fixed",fixedSchema);

appendFile.listen(4000,async()=>{
    try{
await connect();
    } catch(error){
        console.log(
            error,"somthing wrong")
    }
})

// saving crud
app.get("/Saving", async(req,res)=>{
    try {
        const Master=await Fix.find()
    } catch (error) {
        
    }
})