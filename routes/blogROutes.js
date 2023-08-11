const express = require('express')
const { getAllBlogsController, createBlogController, updateBlogController, getBlogController, deleteBlogController, userBlogController } = require('../controllers/blogController')

//router object
const router = express.Router()

//routes
//GET || a\All-blogs
router.get('/all-blog', getAllBlogsController)

//POST || Create-blog
router.post('/create-blog' , createBlogController)

//PUT || Update-blog
router.put('/update-blog/:id' , updateBlogController)

//GET || Single Blog Details
router.get('/get-blog/:id' , getBlogController)

//DELETE || Delete Blog
router.delete('/delete-blog/:id' , deleteBlogController)

//GET || USER BLOG
router.get('/user-blog/:id' , userBlogController )

module.exports = router