const mongoose = require('mongoose');


const programSchema = mongoose.Schema({
    audioname: {type: String, required: true},
    filename:{type:String,required:true},
    category:{type:String,required:true},
    
});

module.exports= mongoose.model("programs",programSchema);