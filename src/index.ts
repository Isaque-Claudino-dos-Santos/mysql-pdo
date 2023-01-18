import 'dotenv/config'
import env from '@config/process.env'

import Connection from './Connection'
import DataBase from './DataBase'

export const connection = new Connection({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
})

export const database = new DataBase(connection.prom())
