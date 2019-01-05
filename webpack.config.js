const path = require('path');
const fs = require("fs");
const nodeExternals = require('webpack-node-externals');
module.exports = function (env, argv) {
	console.log("env", env);
	return {
		mode: env.production ? 'production' : 'development',
		devtool: env.production ? 'source-maps' : 'eval',
		target: "node",
		entry: './src/server/src/index.ts',
		watch: true,
		output: {
			path: path.resolve(__dirname, 'src/server/dist'),
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
		externals: [fs.readdirSync("./node_modules")
			.reduce(function (acc, mod) {
				if (mod === ".bin") {
					return acc
				}
				acc[mod] = "commonjs " + mod;
				return acc
			}, {}), nodeExternals()],
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
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: [/node_modules/, path.resolve(__dirname, './src/client')]
				}
			]
		},
		devServer: {
			contentBase: false,
			compress: false,
			port: 9000,
			historyApiFallback: true,
			open: false,
			overlay: {
				warnings: true,
				errors: true
			}
		}
	};
};