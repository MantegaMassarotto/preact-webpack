const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,        
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.web.js',
      '.js',
      '.web.ts',
      '.ts',
      '.web.jsx',
      '.jsx',
      '.web.tsx',
      '.tsx',
      '.json',
    ],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
      // react: 'preact/compat',
      // 'react-dom/test-utils': 'preact/test-utils',
      // 'react-dom': 'preact/compat', // Must be below test-utils
      // 'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),
    new webpack.DefinePlugin({ process: { env: {} } }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
  },
};
