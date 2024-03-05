import { PrismaClient } from "@prisma/client";
import { users } from "./seeder/UserSeeder.js";
import { posts } from "./seeder/PostSeeder.js";

const prisma = new PrismaClient()

async function main() {
    for (let user of users) {
        await prisma.user.create({
            data: user
        })
    }
    for (let post of posts){
        await prisma.post.create({
            data:post
        })
    }
}

main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(() => {
    prisma.$disconnect()
})