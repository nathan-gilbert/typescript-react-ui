import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { merge } from 'webpack-merge'
import * as path from 'path'
import * as webpack from 'webpack'
import common from './webpack.common'

const devServer: DevServerConfiguration = {
  static: {
    directory: path.join(__dirname, 'assets'),
    publicPath: '/',
  },
  historyApiFallback: true,
  compress: true,
  port: 9000,
  hot: true,
  open: true,
}

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devServer,
}

export default merge(common, config)
