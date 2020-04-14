// export function insert(collection, payload, options) {}

import { dbConnection } from './mongodb-client'

export function insert({ collection, payload: { id, attributes }, options }) {
  return dbConnection()
    .collection(collection)
    .insertOne({ _id: id, ...attributes }, options)
}

export function update({ collection, id, attributes, options }) {
  return dbConnection()
    .collection(collection)
    .findOneAndUpdate({ _id: id }, { $set: attributes }, options)
}

export function findOne({ collection, id }) {
  return dbConnection()
    .collection(collection)
    .findOne({ _id: id })
    .then((value) => (value ? convertID(value) : null))
}

export function find({ collection, filter, options }) {
  return dbConnection().collection(collection).find(filter, options)
}

function convertID({ _id, ...rest }) {
  return { id: _id, ...rest }
}
