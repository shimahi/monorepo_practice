const path = require('path')
const { argv } = require('yargs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotenvWebpackPlugin = require('dotenv-webpack')
const { EnvironmentPlugin } = require('webpack')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  mode: argv.develop ? 'development' : 'production',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devServer: {
    open: true,
    contentBase: outputPath,
    historyApiFallback: true,
    watchContentBase: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    argv.develop
      ? new DotenvWebpackPlugin()
      : new EnvironmentPlugin(Object.keys(process.env)),
  ],
  output: {
    filename: 'index.js',
    path: outputPath,
    publicPath: '/',
  },
}
