import { load } from 'ts-dotenv'

const env = load({
    DB_USER: String,
    DB_PORT: Number,
    DB_NAME: String,
})

export default env
