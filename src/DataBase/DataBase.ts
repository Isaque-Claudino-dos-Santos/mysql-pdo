import mysql2 from 'mysql2/promise'

export default class DataBase {
    constructor(private connection: Promise<mysql2.Connection>) {}
}
