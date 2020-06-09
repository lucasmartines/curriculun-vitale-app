const PersonalData = require('./model')
const express = require('express')

module.exports = (app) => {

    let PersonalDataRoute = express.Router()
    app.use('/api',PersonalDataRoute)

    PersonalData.methods(['get','post','put','delete'])
    PersonalData.register(PersonalDataRoute,'/personal-data')

    
}