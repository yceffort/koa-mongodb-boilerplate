import { URL } from 'url'
import { Db as DB, MongoClient } from 'mongodb'

import { MONGODB_URL } from './config'

let connection = undefined
let db = undefined

export async function initialize() {
  if (!connection) {
    connection = await MongoClient.connect(MONGODB_URL, {
      useNewUrlParser: true,
      ignoreUndefined: true,
      useUnifiedTopology: true,
    })

    db = connection.db(new URL(MONGODB_URL).pathname.replace(/^\//, ''))
  }
}

export function startSession() {
  return connection.startSession()
}

export function dbConnection() {
  return db
}

export async function close() {
  if (connection) {
    await connection.close()

    connection = undefined
  }

  db = undefined
}
