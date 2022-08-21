import type { Fields } from './fields'
import { isFunction } from './helpers/isFunction'
import { isObject } from './helpers/isObject'
import { isArray } from './helpers/isArray'
import { generateObject } from './generateObject'

export function generateValue(value: Fields[string]): Fields[string] {
    if (isFunction(value)) return (value as Function)()
    if (isArray(value))
        return (value as Array<Fields[string]>).map((field) =>
            generateValue(field)
        )
    if (isObject(value)) return generateObject(value as Fields)
    return value
}
