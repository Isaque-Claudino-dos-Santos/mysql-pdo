namespace TypeTable {
    export type Attributes = {
        name: string
        type: string
        allowNull?: boolean
        autoIncrement?: boolean
        primaryKey?: boolean
    }
    export type Options = {
        errorAlreadyExist?: boolean
    }
}

export default TypeTable
