# Fongus

An npm package to generate dummy documents for your mongodb project with Mongoose or MongoDB driver

For more info on how to use the **faker** object check out their [docs](https://fakerjs.dev/)

## For Mongoose

```js
import { swamp, faker } from 'fongus'
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    email: String,
    adress: {
        zip: String,
        street: String,
    },
    colors: [String],
})

await swamp({
    count: 10,
    fields: {
        name: faker.name.firstName,
        email: faker.internet.email,
        address: {
            zip: faker.address.zipCode,
            street: faker.address.street,
        },
        colors: [faker.color.human, faker.color.human],
    },
    path: User,
})
```

## For MongoDB

```js
import { swamp, faker } from 'fongus'
import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

await swamp({
    count: 10,
    fields: {
        name: faker.name.firstName,
        email: faker.internet.email,
        address: {
            zip: faker.address.zipCode,
            street: faker.address.street,
        },
        colors: [faker.color.human, faker.color.human],
    },
    path: client.db('myProject').collection('users'),
})
```
