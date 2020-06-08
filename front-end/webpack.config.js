const path = require('path')

const env = require('../env')
module.exports = {
    entry: __dirname + '/index.js',
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js'
    },
    devServer: {
        port: env.FRONTEND_PORT,
        contentBase: 'public'
    }, 
    devtool: 'inline-source-map',
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss|scss)$/,
                use: [
                    'style-loader', // importar os arquivos .css
                    'css-loader', // dá o suporte para o javascript usar css nas tags jsx eu acho
                    'sass-loader' // importa .scss e sass precisa instalar o node-sass
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|png|gif|jpg)$/,
                use: ['file-loader']
            }
        ]
    }
}