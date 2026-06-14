import express from "express";
import cors from "cors"
import mongoose from "mongoose"

const app= express();
const port =5000;

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/leatherscin").then(()=>console.log("mongodb connected successfully")).catch((err)=>console.log("db error",err))

app.listen(port,()=>{
    console.log(`http:localhost:${port}`)
})