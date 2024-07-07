const express = require("express");
const {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getBLogByIdCOntroller,
  deleteBlogController,
  getUserBlogController,
} = require("../controllers/blogController");

//router object
const router = express.Router();

//router
//GET || all blogs
router.get("/all-blogs", getAllBlogController);

//POST || create blog
router.post("/create-blog", createBlogController);

//PUT || update blog
router.put("/update-blog/:id", updateBlogController);

//GET || get single blog
router.get("/get-blog/:id", getBLogByIdCOntroller);

//DELETE || delete blog
router.delete("/delete-blog/:id", deleteBlogController);

//GET || get user blogs
router.get("user-blog/:id", getUserBlogController);

module.exports = router;
