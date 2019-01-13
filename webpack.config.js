const path = require('path');
const fs = require("fs");
const nodeExternals = require('webpack-node-externals');
module.exports = function (env, argv) {
	console.log("env", env);
	return {
		mode: 'development',
		devtool: 'eval',
		target: "node",
		entry: './src/server/src/index.ts',
		watch: env.developement,
		output: {
			path: path.resolve(__dirname, 'src/server/dist', env.production ? 'prod' : 'dev'),
			filename: "server.js",
			libraryTarget: 'commonjs'
		},
		node: {
			console: false,
			global: false,
			process: false,
			__filename: false,
			__dirname: false,
			Buffer: false,
			setImmediate: true
		},
		externals: [nodeExternals()],
		resolve: {
			extensions: [
				'.webpack.js',
				'.web.js',
				".ts",
				".js",
				".json",
			],
			alias: {
				'@server': path.resolve(__dirname, './src/server/src/'),
				'@module': path.resolve(__dirname, './src/server/src/app/module/'),
				'@shared': path.resolve(__dirname, './src/shared/')
			}
		},
		module: {
			rules: [
				{
					test: /\.ts?$/,
					use: 'ts-loader',
					exclude: [/node_modules/, path.resolve(__dirname, './src/client'), path.resolve(__dirname, './src/templates')]
				},
				{
					test: /\.js?$/,
					use: 'babel-loader',
					exclude: [/node_modules/, path.resolve(__dirname, './src/client'), path.resolve(__dirname, './src/templates')]
				}
			]
		},
		devServer: {
			compress: false,
			contentBase: path.join(__dirname, "./dist"),
			port: 9001,
			historyApiFallback: true,
			open: true,
			proxy: {
				'/api/*': 'http://127.0.0.1:8010',
				"changeOrigin": true
			},
			overlay: {
				warnings: true,
				errors:
					true
			}
		}
	}
		;
};