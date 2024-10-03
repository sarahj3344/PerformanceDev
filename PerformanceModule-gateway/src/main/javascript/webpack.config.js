var webpack = require('webpack');
const autoprefixer = require('autoprefixer')
const path = require('path');

var outputFile = 'performancestatus.js';

var config = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.join(
        __dirname,
        '../resources/mounted/js'),
    filename: outputFile,
    publicPath: '/dist',
    library: 'performancestatus',
    libraryTarget: 'var'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx','.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,  // Match .js, .jsx, .ts, and .tsx files
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,  // Match .css files
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          },
        ]
      },{
        test: /\.css$/,
        use: [
          'style-loader',  // Injects styles into DOM
          'css-loader'     // Translates CSS into CommonJS
        ],
      },
    ]
  },
  plugins: [
      // new webpack.optimize.UglifyJsPlugin({minimize:true})
      // new FailPlugin(),
  ],
  externals: [
    {react: 'React'},
    {'react-dom': 'ReactDOM'},
    {'ignition-react': 'IgnitionReact'},
    {'ignition-lib': 'IgnitionLib'},
    {'moment': 'moment'},
    {'numeral': 'numeral'}
      // moment and numeral are helpful for formatting time and numbers. Remove these lines if you don't need them.
  ]
};

module.exports = config;