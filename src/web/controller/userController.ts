import { userService } from "../../domain/service/userService"

const userServiceClass = new userService

class userController {

    async list(req: any, res: any) {
        const user = await userServiceClass.listUser()

        return res.status(200).json(user)
    }

    async show(req: any, res: any) {
        const { id } = req.params
        const userId = parseInt(id);

        const user = await userServiceClass.showUser(userId)

        return res.status(200).json(user)
    }

    async create(req: any, res: any) {
        const data = req.body
        const user = userServiceClass.createUser(data)

        return res.status(200).json(user)
    }

    async update(req: any, res: any) {
        const { id } = req.params
        const data = req.body
        const userId = parseInt(id);
        const user = userServiceClass.updateUser(userId, data)

        return res.status(200).json(user)
    }

    async delete(req: any, res: any) {
        const { id } = req.params
        const userId = parseInt(id);

        const user = userServiceClass.deleteUser(userId)

        return res.status(200).json(user)
    }
}

export default new userController()