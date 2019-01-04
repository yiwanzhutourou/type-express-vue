import * as express from 'express'
import { Request, Response } from 'express'
import { get as getUser } from '../controllers/UserController'

export const register = (app: express.Application) => {
    app.get('/api/user/:userId', (req: Request, res: Response): any => {
        getUser(req, res)
    })
}
