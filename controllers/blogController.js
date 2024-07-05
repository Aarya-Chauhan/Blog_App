const mongoose = require('mongoose');
const blogModel = require('../models/blogModel');




//GET all blogs
exports.getAllBlogController = async(req,res) => {
     try {
        const blogs = await blogModel.find({})
        if(!blogs){
            return res.status(200).send({
                success:false,
                message:"blogs not found"
            })
        }
        return res.status(200).send({
            success:true,
            blogCount:  blogs.length,
            message: "all blog list",
            blogs
        })
        
     } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message: "error while getting blog",
            error
        })
        
     }
}

 
//Create blog
exports.createBlogController = async(req,res) => {
    try {
        const {title, description, image} = req.body;
        //validation
        if(!title || !description || !image){
            return res.status(400).send({
                success:false,
                message:"please fill all fields"
            })            
        }
        const newBlog = new blogModel({title,description,image});
        await newBlog.save();
        return res.status(201).send({
            success:true, 
            message: "new blog created",
            newBlog
        })
        
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "error while creating blog",
            error
        })        
    }
}

//Update blog
exports.updateBlogController = () => {}

//GET single blog
exports.getBLogByIdCOntroller = () => {}

//delete blogs
exports.deleteBlogController = () => {}