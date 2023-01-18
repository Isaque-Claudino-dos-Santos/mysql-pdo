import mysql2 from 'mysql2/promise'

export default class TableDB {
    constructor(private connection: Promise<mysql2.Connection>) {}
}
