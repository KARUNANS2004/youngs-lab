const express=require('express');
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors())

app.get("/api/greeting",(req,res)=>{
    const name=req.query.name
    if(!name){
        return res.json({error:"Name is requried"});
    }
    res.json({message:`Hello, ${name}! Welcome to YoungLabs.`})
}
)

app.listen(PORT,()=>{console.log(`server is running on port:${PORT}`)})

