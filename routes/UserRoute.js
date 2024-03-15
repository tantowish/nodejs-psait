import express from "express";
import {
    getUsers,
    getUser,
    createUser,
    editUser,
    deleteUser,
    getUserPosts
} from '../controller/UserController.js'

const router = express.Router()

router.get('/api/users', getUsers)

router.get('/api/user/:id', getUser)

router.post('/api/user', createUser)

router.put('/api/user/:id', editUser)

router.delete('/api/user/:id', deleteUser)

router.get('/api/user/:id/posts', getUserPosts)

export default router