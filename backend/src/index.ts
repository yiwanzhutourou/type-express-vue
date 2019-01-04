import dotenv from 'dotenv'
import express from 'express'
import * as users from './routes/users'

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT

users.register(app)

app.listen(port, () => {
    console.log(`environment is ${process.env.NODE_ENV}`)
    console.log(`server started at http://localhost:${port}`)
})
