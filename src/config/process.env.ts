import { load } from 'ts-dotenv'

const env = load({
    DB_HOST: {
        type: String,
        default: 'localhost',
    },
    DB_PORT: {
        type: Number,
        default: 3306,
    },
    DB_USER: String,
    DB_PASS: String,
    DB_NAME: String,
})

export default env
