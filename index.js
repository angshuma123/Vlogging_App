const express=require("express")
const app=express()
const port=3000
const db=require("./config/db")
const Post=require("./models/Post")
db().then(()=>console.log("Successfully connected to the Database")).catch(err => console.log(err));
//To check health of api
app.get("/api/",(req,res)=>{
    res.status(200).json({message:"Api is working perfectly fine"})
})
//To fetch all the posts
app.get("/api/posts",(req,res)=>{
    Post.find({}).then((data)=>{
        res.status(200).json({data})
    }).catch((err)=>{
        res.status(500).json({message:err})
    })
})
//To get a specific post result
app.get("/api/posts/:id",(req,res)=>{
    let postid=req.params.id;
    Post.find({id:postid}).then((data)=>{
        res.status(200).json({data})
    }).catch((err)=>{
        res.status(500).json({message:err})
    })
    
})
app.get("/api/",(req,res)=>{
    
})
app.get("/api/",(req,res)=>{
    
})
app.get("/api/",(req,res)=>{
    
})
app.listen(port,(err)=>{
    if(!err){
        console.log(`Server is up and running at ${port}`)
    }
})
