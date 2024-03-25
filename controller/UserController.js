import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
}

export const getUser = async (req, res) => {
    const userId = parseInt(req.params.id)
    if (userId == NaN) {
        return res.status(404).json({ message: 'User not found' })
    }
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
}

export const createUser = async (req, res) => {
    try {
        const user = await prisma.user.create({ data: req.body })
        res.status(200).json({
            "message": "Berhasil membuat user",
            user
        })
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(400).json({
            message: "Gagal membuat user"
        })
    }
}

export const editUser = async (req, res) => {
    const userId = parseInt(req.params.id)
    if (userId == NaN) {
        res.status(404).json({ message: 'User not found' })
    }
    const user = await prisma.user.update({
        where: {
            id: userId
        },
        data: req.body
    })
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json({
        message: "Berhasil mengubah data",
        user
    })
}

export const deleteUser = async (req, res) => {
    const userId = parseInt(req.params.id)
    if (userId == NaN) {
        return res.status(404).json({ message: 'User not found' })
    }

    await prisma.post.deleteMany({
        where: {
            authorId: userId
        }
    })

    const user = await prisma.user.delete({
        where: {
            id: userId
        }
    })

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json({
        "message": "Berhasil menghapus user",
        user
    })
}

export const getUserPosts = async (req, res) => {
    const userId = parseInt(req.params.id)
    if (userId == NaN) {
        return res.status(404).json({ message: 'User not found' })
    }
    const posts = await prisma.user.findUnique({
        where: {
            id: userId
        },
        include: {
            posts: true
        }
    })
    if (!posts) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(posts);
}