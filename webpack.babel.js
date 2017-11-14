import path from 'path';
import webpack from 'webpack';
import Package from './package.json';


const config = {
	cache: true,
	entry:  {
		bundle: './src/bundle.js',
	},
	output: {
		filename: '[name].js',
		path:     path.join(__dirname, 'dist')
	},
	plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'APP_ENV': JSON.stringify('development'),
            },
            // 'API_URL': JSON.stringify('http://terp.dev/api/')
            'API_URL': JSON.stringify('http://lp.tiembanhnho.com/terp/index.php/api/')
            
        }),
		new webpack.ExtendedAPIPlugin()
	],
	node: {
		fs: "empty"
	},
	module: {
		rules: [
		{
			exclude: /node_modules/,
			use:  ['babel-loader'],
			test:    /\.js?$/
		}
		]
	},
	resolve: {
		modules: [
			path.join(__dirname, "src"),
			"node_modules"
		]
	}
};

export default config;
