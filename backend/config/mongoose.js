const mongoose = require ('mongoose')


/** config database env */
    let {DATABASE_URL , DATABASE_PORT } = process.env
    DATABASE_URL = DATABASE_URL   ? DATABASE_URL  : 'localhost' 
    DATABASE_PORT = DATABASE_PORT ? DATABASE_PORT : '27017' 

/**conect do mongoose */
mongoose.connect( `mongodb://${DATABASE_URL}:${DATABASE_PORT}` , {useNewUrlParser: true})
    .catch( e => {
        console.error(`Não foi possivel conectar com o banco de dados
            DB_LINK: ${DATABASE_URL}:${DATABASE_PORT} : \n ${e}`)
    } )

mongoose.connection.on('open',() => {
    console.log(`____________DB IS CONECTED: ${DATABASE_URL}:${DATABASE_PORT}`)
})

module.exports = mongoose