const mongoose = require('mongoose');

//userModelSchema

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true,'username is required']
    },
    email:{
        type: String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    blogs:[{
        type: mongoose.Types.ObjectId,
        ref:"blog",
    },
],
},{timestamps:true})

userModel = mongoose.model('User', userSchema)

module.exports = userModel;