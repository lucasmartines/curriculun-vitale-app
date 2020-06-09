const express = require('express')
const app = require('./src/app')
const env = require('../env.js')

const db = require('./config/db.js')
/** carregar o aplicativo front end */
require('./services/app/app-service.js')(app)
require('./services/personal-data/personal-data-service.js')(app)

/** GET environment vars */
    let {BACKEND_HOST , BACKEND_PORT  } = env
    
/** host app */
app.listen(BACKEND_PORT,BACKEND_HOST, _ => {
    console.log(`______servidor ${BACKEND_HOST} rodando na porta ${BACKEND_PORT}_________`)
})
