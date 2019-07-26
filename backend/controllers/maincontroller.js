const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const proSchema = require('../models/programmodel');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));


mongoose.connect('mongodb://localhost/Namdu1Radio');

router.post('/create',(req,res,next)=>{
    console.log("hello");
    var newPost=new proSchema(req.body);
    // console.log(newPost);

    proSchema.findOne({audioname:req.body.audioname}, (err,result) => {
        if(err) {
            res.status(500).json(err);
        } else if(result == null) {
            newPost.save((err,result) => {
                console.log(result);
                if(err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json({
                        status: "success",
                        data: result
                    });
                }
            })
        } else {
            res.status(200).json({
                status: "fail",
                data: "audio already exists"
            })
        }
    })
})

router.post("/get",(req,res,next)=>{
    console.log('Inside get')
    proSchema.find((err, result) => {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json({
             status: "success",
             data: result  
            });
        }
    });
});

router.post("/getSome",(req,res,next)=>{
    proSchema.find({category: req.body.category}, (err, result)=>{
        console.log('inside getSome')
        if(err) {
            res.status(500).json(err)
        }
        res.status(200).json({
            status: "success",
            data: result  
        });
    });
});

router.post("/remove",(req,res,next)=>{
    console.log(req.body);
    proSchema.remove({audioname:req.body.audioname}, (err, result) => {
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(200).json({
                status: "deleted",
                data: result
            })
        }
    })
    console.log("removed");
});

router.get("/", (req, res, next) => {
    res.status(200).json("inside main");
})
module.exports=router;