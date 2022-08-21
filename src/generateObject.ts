import type { Fields } from './fields'
import { generateValue } from './generateValue'

export function generateObject(obj: Fields) {
    let res: any = {}

    for (const [key, value] of Object.entries(obj)) {
        res[key] = generateValue(value)
    }

    return res
}
