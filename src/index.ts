import 'dotenv/config'
import env from './config/process.env'

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

database.createTable('users', [
    {
        name: 'name',
        type: 'varchar(100)',
    },
    {
        name: 'age',
        type: 'int(3)',
    },
])

database.insertTable('users', [
    {
        key: 'name',
        value: 'isaque',
    },
    {
        key: 'age',
        value: 18,
    },
])

database.dropTable('users')
