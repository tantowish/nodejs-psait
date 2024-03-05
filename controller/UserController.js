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
        await prisma.user.create({ data: req.body })
        res.status(200).json({
            "message": "Berhasil membuat user"
        })
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            "message": "Gagal membuat user"
        })
    }
}