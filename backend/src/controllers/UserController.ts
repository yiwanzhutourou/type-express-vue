import { Request, Response } from 'express'
import { badRequst, ok } from '../utils/restful'
import { getUserById } from '../repositories/UserRepository'

const userNotFound = (res: Response): void => {
    res.status(404).json(badRequst(-1, 'User not found'))
}

export const get = (req: Request, res: Response): void => {
    const userId = parseInt(req.params.userId, 10)
    if (isNaN(userId)) {
        userNotFound(res)
    } else {
        const user = getUserById(userId)
        if (user) {
            res.status(200).json(ok(user))
        } else {
            userNotFound(res)
        }
    }
}
