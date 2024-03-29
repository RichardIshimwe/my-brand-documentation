import express from 'express';
import blogControler from '../controllers/blog.controllers.js';
import isAdmin from '../middlewares/isAdmin.middleware.js'

const router = express.Router();

router.get('/', blogControler.displayBlogs);
router.delete('/:id', isAdmin, blogControler.deleteBlog)
router.put('/:id', isAdmin, blogControler.editBlog)
router.get('/:id', blogControler.singleBlog)
router.post('/', blogControler.createBlog);
// router.post('/', upload.single('image'), blogControler.createBlog);

export default router