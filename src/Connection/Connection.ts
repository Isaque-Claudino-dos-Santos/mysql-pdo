import mysql2 from 'mysql2/promise'

export default class Connection {
    private context: Promise<mysql2.Connection>

    constructor(private config: mysql2.ConnectionOptions) {
        this.context = mysql2.createConnection(this.config)
    }

    prom(): Promise<mysql2.Connection> {
        return this.context
    }

    setConfig(config: mysql2.ConnectionOptions) {
        this.config = { ...this.config, ...config }
    }
}
