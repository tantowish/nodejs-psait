import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getPosts = async (req, res) => {
    const posts = await prisma.post.findMany()
    res.status(200).json(posts)
}

export const getPost = async (req, res) => {
    const postId = req.params.id;

    const validUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!validUuid.test(postId)) {
        return res.status(400).json({ message: "Invalid id format" });
    }

    const post = await prisma.post.findUnique({
        where: {
            id: postId
        }
    })
    if (!post) {
        return res.status(404).json({ message: "Post not found" })
    }

    res.status(200).json(post)
}

export const createPost = async (req, res) => {
    try {
        const user = await prisma.post.create({ data: req.body })
        res.status(200).json({
            message: "Berhasil membuat post",
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Gagal membuat post" })
    }
}

export const editPost = async (req, res) => {
    const postId = req.params.id;

    const validUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!validUuid.test(postId)) {
        return res.status(400).json({ message: "Invalid id format" });
    }

    try {
        const post = await prisma.post.update({
            where: {
                id: postId
            },
            data: req.body
        })

        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }

        res.status(200).json({
            message: "Berhasil mengubah data",
            post
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Gagal mengupdate data" })
    }
}

export const deletePost = async (req,res)=>{
    const postId = req.params.id;

    const validUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!validUuid.test(postId)) {
        return res.status(400).json({ message: "Invalid id format" });
    }

    try {
        const post = await prisma.post.delete({
            where:{
                id:postId
            }
        })
        if(!post){
            return res.status(404).json({message: "Post not found"})
        }
        res.status(200).json({
            message: "Berhasil menghapus data",
            post
        })
    } catch (error) {
        return res.status(400).json({message: "Gagal menghapus post"})
    }
}