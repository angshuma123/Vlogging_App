const express=require("express")
const app=express()
const port=3000
const db=require("./config/db")
const Post=require("./models/Post")
db().then(()=>console.log("Successfully connected to the Database")).catch(err => console.log(err));
app.listen(port,(err)=>{
    if(!err){
        console.log(`Server is up and running at ${port}`)
    }
})
