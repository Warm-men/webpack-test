
var HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const path = require('path');

module.exports = {

  entry:{

  	main: './src/script/main.js',

  	a: './src/script/a.js',
  	
  	b: './src/script/b.js'

  },

  output:{

  	path: __dirname + '/dist',

    filename:'./js/[name].js'

  },

  plugins: [

    new HtmlWebpackPlugin({

    	template: __dirname + '/index.html',

    	inject: 'head'

    })

  ]
}