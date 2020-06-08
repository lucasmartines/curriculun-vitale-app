let{DB_HOST,DB_PORT,BACKEND_PORT,BACKEND_HOST} = process.env

module.exports = {
    DB_PORT: DB_PORT ? DB_PORT : '27017',
    DB_HOST: DB_HOST ? DB_HOST : 'localhost',

    /** this is port just for webpack-server */
    FRONTEND_PORT: '5000',

    BACKEND_HOST: BACKEND_HOST ? BACKEND_HOST: 'localhost',
    BACKEND_PORT: BACKEND_PORT ? BACKEND_PORT : '9000'    
}