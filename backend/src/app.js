const app = require('express')()

/** load the power of cors and 'higher level of security' */
    console.log('____CORS IS ENABLED_____')
    const cors = require('../middleware/cors')
    app.use(cors)


module.exports = app