export interface Fields {
    [key: string]:
        | string
        | null
        | undefined
        | number
        | any[]
        | Function
        | Fields
}
