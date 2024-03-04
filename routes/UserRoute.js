import express from "express";
import {
    getUsers,
    getUser
} from '../controller/UserController.js'

const router = express.Router()

router.get('/users', getUsers)
router.get('/user/:id', getUser)

export default router