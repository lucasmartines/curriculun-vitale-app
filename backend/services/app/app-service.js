/*
* codigo para carregar o front end na pasta ~/backend/public
* for loading front end folder ~/backend/public
*/

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')


/** carrega o aplicativo front end */
module.exports = (app) => {

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    /** send static file front end */
        app.get('/', (req, res) => {
          res.send('I an the server of curriculun-vitale-app')
        })

}