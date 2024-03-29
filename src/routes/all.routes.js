import express from 'express';

import blogRoutes from './blog.routes.js'
import signup from './signup.routes.js'
import message from './messages.routes.js'
import login from './login.routes.js'
import verifyUser from '../middlewares/verifyUser.middleware.js';
import comment from './comment.routes.js'
import logout from './logout.routes.js';
import makeAdmin from './makeAdmin.routes.js'
import isAdmin from '../middlewares/isAdmin.middleware.js'



const routes = express.Router();
// routes.post('/test',(req, res) => res.status(200).json({message:"testing route"}));
routes.use('/signup', signup);
routes.use('/blogs', verifyUser, blogRoutes);
routes.use('/message', verifyUser, message);
// routes.use('/login', (req, res) => {
//    return res.status(200).json({ message: "this is the login page",password:req.body.password,email:req.body.email })
// });
routes.use('/login', login);
routes.use('/logout', logout);
routes.use('/comment', verifyUser, comment)
routes.use('/makeAdmin',isAdmin, makeAdmin)

routes.use((req, res) => {
   return res.status(404).json({ message: "page is not found" })
})

export default routes
