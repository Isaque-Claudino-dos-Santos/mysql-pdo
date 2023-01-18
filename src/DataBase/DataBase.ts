import mysql2 from 'mysql2/promise'
import TableDB from '../TableDB/TableDB'

export default class DataBase {
    constructor(private connection: Promise<mysql2.Connection>) {}

    table = new TableDB(this.connection)
}
