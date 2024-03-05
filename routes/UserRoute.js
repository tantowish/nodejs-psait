import express from "express";
import {
    getUsers,
    getUser,
    createUser
} from '../controller/UserController.js'

const router = express.Router()

router.get('/users', getUsers)

router.get('/user/:id', getUser)

router.post('/user', createUser)

export default router