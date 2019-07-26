const express = require('express');
const bodyParser = require('body-parser');

const app=express();

const maincontroller=require('../controllers/maincontroller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");    //allows all url
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS")
    next();
});



app.get('/',(req,res,next)=>{
    res.status(200).json(
        "Server running"
    
    )
})

app.use('/main',maincontroller);

module.exports=app;