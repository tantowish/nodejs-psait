import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
}

export const createUser = async(req, res)=>{
    await prisma.user.create(req)
}