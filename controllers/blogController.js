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
exports.createBlogController = () => {}

//Update blog
exports.updateBlogController = () => {}

//GET single blog
exports.getBLogByIdCOntroller = () => {}

//delete blogs
exports.deleteBlogController = () => {}