const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true,"title is required"]
    },
    description:{
        type:String,
        require:[true,"description is required"]
    },
    image:{
        type:String,
        require:[true,"imgaes are required"]
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref: "User",
        require:[true, 'user id is required']
    }
},{timestamps:true})

const blogModel = mongoose.model('blog', blogSchema);

module.exports = blogModel;