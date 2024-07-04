const express = require('express');

//router object 
const router = express.Router();

//router
//GET || all blogs
router.get('/all-blogs',getAllBlogController);

//POST || create blog
router.post('/create-blog',createBlogController);

//PUT || update blog
router.put('/update-blog/:id',updateBlogController);

//GET || get single blog
router.get('/get-blog/:id',getBLogById);

//DELETE || delete blog
router.delete('/delete-blog/:id',deleteBlogController);



module.exports = router;