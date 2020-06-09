const mongodb = require('mongoose')
const env = require('../../env.js')

mongodb.connect(`mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`)
    .then( _ => {
        console.log(`__Conected to Database:${env.DB_HOST}:${env.DB_PORT}__`)
    } )
    .catch( err => {
        console.error(`FAIL TO CONNECT: ${env.DB_HOST}:${env.DB_PORT} `,err)
    } )

module.exports = mongodb

