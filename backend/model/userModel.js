const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    mobile:{
        type:Number,
        unique:true,
        required:true
    },
  });
  
  const User = mongoose.model('User', userSchema);
  

  module.exports = User;