import type { Fields } from './fields'
import { generateObject } from './generateObject'

export function generateArray(fields: Fields, numberOfDocuments: number) {
    let arr: any[] = []

    for (let i = 0; i < numberOfDocuments; i++) {
        const obj = generateObject(fields)
        arr.push(obj)
    }

    return arr
}
