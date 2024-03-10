const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const app=express()

const port=3000||process.env.PORT
app.use(express.json());
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
    Post.find({_id:postid}).then((data)=>{
        res.status(200).json({data})
    }).catch((err)=>{
        res.status(500).json({message:err})
    })
    
})
//Create a new post
app.post("/api/posts",(req,res)=>{
    let newpost=new Post({
        title:req.body.title,
        description:req.body.description,
    })
    newpost.save().then((data)=>{
        res.status(200).json({data})
    }).catch((err)=>{
        res.status(500).json({message:err})
    })
})
//Updating a specific post
app.put("/api/posts/:id",(req,res)=>{
    let newid=req.params.id;
    let newinfo={
        title:req.body.title,
        description:req.body.description,
    }
    Post.findByIdAndUpdate(newid,newinfo).then((data)=>{
        res.status(200).json({message:"Successfully updated",data:data})
    }).catch((err)=>{
        res.status(500).json({message:err})
    })
    
})
//Deleting a specific post
app.delete("/api/posts/:id",(req,res)=>{
    let newid=req.params.id;
    Post.findByIdAndDelete(newid).then((data)=>{
        res.status(200).json({message:"Successfully deleted"})
    }).catch((err)=>{
        res.status(500).json({message:err})
    })
})
app.listen(port,"127.0.0.1",(err)=>{
    if(!err){
        console.log(`Server is up and running at ${port}`)
    }
})

