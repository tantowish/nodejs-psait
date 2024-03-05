import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getPosts = async (req, res)=>{
    res.json({"message":"Hello"})
}