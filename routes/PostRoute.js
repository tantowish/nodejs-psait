import express from "express";
import { createPost, deletePost, editPost, getPost, getPosts } from "../controller/PostController.js";

const router = express.Router()

router.get('/posts', getPosts)

router.get('/post/:id', getPost)

router.post('/post', createPost)

router.put('/post/:id', editPost)

router.delete('/post/:id', deletePost)

export default router