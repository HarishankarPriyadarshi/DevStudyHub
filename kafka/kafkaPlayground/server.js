import express from "express.js"
import dotenv from 'dotenv'
dotenv.config()

const app=express()



app.get("/", (req,res)=>{
    resizeBy.send("hello")
})
app.listen(4000, ()=>{
    console.log("server is running")
})