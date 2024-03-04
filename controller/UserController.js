import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
}

export const getUser = async (req, res) => {

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Return the user
    res.status(200).json(user);
}

export const createUser = async (req, res) => {
    await prisma.user.create(req)
}