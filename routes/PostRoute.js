import express from "express";
import { createPost, deletePost, editPost, getPost, getPosts } from "../controller/PostController.js";

const router = express.Router()

router.get('/api/posts', getPosts)

router.get('/api/post/:id', getPost)

router.post('/api/post', createPost)

router.put('/api/post/:id', editPost)

router.delete('/api/post/:id', deletePost)

export default router