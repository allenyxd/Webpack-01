const FileLoader = require('file-loader');
const HtmlWebPack   = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",

    output:{
        clean:true
    },
    module:{

        rules:[
            {
                test:/\.html$/,
                loader:'html-loader',
                options:{
                    sources: false
                }
            },
            {
                test:/\.css$/,
                exclude: /styles.css$/,
                use:['style-loader', 'css-loader'],
            },
            {
                test: '/estilo.css$/',
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.-(png|jpe?g|gif)$/,
                loader:'file-loader',
            },
            {
            test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        
    },
    optimization:{},
    plugins:[
        new HtmlWebPack({
            title:'Mi Webpack App',
            //filename:'index.html',
            template:'./src/index.html',
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false,
        }),
    ]
}