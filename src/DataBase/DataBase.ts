import mysql2 from 'mysql2/promise'
import TypeTable from '../TableDB/TypeTable'

export default class DataBase {
    constructor(private connection: Promise<mysql2.Connection>) {}

    async createTable(
        tableName: string,
        columns: TypeTable.Attributes[],
        options: TypeTable.Options = {}
    ) {
        const columnsInQuery: string[] = []
        columns.forEach((column) => {
            const name = column.name
            const type = ` ${column.type}`
            const primaryKey = column.primaryKey ? ' PRIMARY KEY' : ''
            const autoIncrement = column.autoIncrement ? ' AUTO_INCREMENT' : ''
            const allowNull = !column.allowNull ? ' NOT NULL' : ''
            columnsInQuery.push(
                `${name}${type}${allowNull}${primaryKey}${autoIncrement}`
            )
        })

        const errorAlreadExist = !options.errorAlreadyExist
            ? 'IF NOT EXISTS'
            : ''

        const query = `CREATE TABLE ${errorAlreadExist} ${tableName} (${columnsInQuery.join(
            ','
        )})`
        await this.connection.then((c) => {
            c.execute(query)
        })
    }

    async dropTable(tableName: string) {
        const query = ` DROP TABLE IF EXISTS ${tableName}`
        await this.connection.then((c) => {
            c.execute(query)
        })
    }

    async insertTable(
        tableName: string,
        columns: { key: string; value: string | number }[]
    ) {
        const keys: string[] = []
        const values: string[] = []

        columns.forEach(({ key, value }) => {
            keys.push(key)
            values.push(String(`'${value}'`))
        })

        const query = `INSERT INTO ${tableName} (${keys.join(
            ','
        )}) VALUES (${values.join(',')})`

        await this.connection.then((c) => {
            c.execute(query)
        })
    }

    async findAll(tableName: string) {
        const query = `SELECT * FROM ${tableName}`
        return await this.connection
            .then((c) => {
                return c.execute(query)
            })
            .then((d) => {
                return d[0]
            })
    }
}
