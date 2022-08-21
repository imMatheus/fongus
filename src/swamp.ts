import type { Collection, Document } from 'mongodb'
import { generateArray } from './generateArray'
import type { Fields } from './fields'
import type { Model } from 'mongoose'

interface Params {
    path: Collection<Document> | Model<{ [key: string]: any }>
    fields: Fields
    count: number
}

export async function swamp({ path, fields, count }: Params) {
    const arr = generateArray(fields, count)

    // @ts-ignore
    await path.insertMany(arr)

    return arr
}
