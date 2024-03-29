import express from 'express';
import message from '../controllers/message.controllers.js'
import isAdmin from '../middlewares/isAdmin.middleware.js'

const router = express.Router();

router.post('/', message.sendMessage)
router.get('/', isAdmin, message.displayMessage)

export default router
