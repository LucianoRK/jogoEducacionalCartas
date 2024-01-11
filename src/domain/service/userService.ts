import { PrismaClient } from "@prisma/client"
import { userInterface } from "../interface/userInterface"

const prisma = new PrismaClient()

export class userService {

    async listUser() {
        return await prisma.user.findMany()
    }

    async showUser(id: number) {
        return await prisma.user.findUnique({
            where: {
                id: id
            },
        })
    }

    async createUser(data: userInterface) {
        return await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                username: data.username,
                password: data.password,
                deleted_at: new Date()
            } as any
        })
    }

    async updateUser(id: number, data: userInterface) {
        return await prisma.user.update({
            where: {
                id: id,
            } as any,
            data: {
                name: data.name,
                email: data.email,
                username: data.username,
                password: data.password
            },
        })
    }

    async deleteUser(id: number) {
        const deleteUser = await prisma.user.delete({
            where: {
                id: id,
            }
        })
    }
}