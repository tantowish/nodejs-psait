import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
}

export const getUser = async (req, res) => {
    const userId = parseInt(req.params.id)
    if (userId == NaN) {
        res.status(404).json({ error: 'User not found' })
    }
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
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
        res.status(500).json({
            "message": "Gagal membuat user"
        })
    }
}

export const editUser = async (req, res) => {
    const userId = parseInt(req.params.id)
    if (userId == NaN) {
        res.status(404).json({ error: 'User not found' })
    }
    const user = await prisma.user.update({
        where: {
            id: userId
        },
        data: req.body
    })
    res.status(200).json({
        "message": "Berhasil mengubah user",
        user
    })
}

export const deleteUser = async (req, res) => {
    const userId = parseInt(req.params.id)
    console.log(userId)
    if (userId == NaN) {
        res.status(404).json({ error: 'User not found' })
    }
    const user = await prisma.user.delete({
        where: {
            id: userId
        }
    })
    res.status(200).json({
        "message": "Berhasil menghapus user",
        user
    })
}