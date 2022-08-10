import * as path from 'path'
import * as webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const htmlWebpackPluginConfig = {
  title: 'eCorp',
  template: path.resolve('templates', 'index.template.html'),
  filename: 'index.html',
  favicon: 'assets/favicons/favicon.ico',
  meta: {
    author: 'eCorp',
    viewport: 'width=device-width, initial-scale=1',
    description: '',
  },
}

const copyPluginConfig = {
  patterns: [
    { from: 'assets/manifest.json', to: 'manifest.json' },
    { from: 'assets/browserconfig.xml', to: 'browserconfig.xml' },
    { from: 'assets/robots.txt', to: 'robots.txt' },
    {
      from: 'assets/favicons/android-chrome-192x192.png',
      to: 'android-chrome-192x192.png',
    },
    {
      from: 'assets/favicons/apple-touch-icon.png',
      to: 'apple-touch-icon.png',
    },
    {
      from: 'assets/favicons/favicon-16x16.png',
      to: 'favicon-16x16.png',
    },
    {
      from: 'assets/favicons/favicon-32x32.png',
      to: 'favicon-32x32.png',
    },
    {
      from: 'assets/favicons/mstile-150x150.png',
      to: 'mstile-150x150.png',
    },
    {
      from: 'assets/favicons/safari-pinned-tab.svg',
      to: 'safari-pinned-tab.svg',
    },
  ],
}

const config: webpack.Configuration = {
  entry: {
    index: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'tailwind.config.js'),
              },
            },
          },
        ],
      },
      {
        test: /\.svg/,
        exclude: /node_modules/,
        use: {
          loader: 'svg-url-loader',
          options: { limit: 100000 },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'eCorp.bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(htmlWebpackPluginConfig),
    new MiniCssExtractPlugin({
      filename: 'eCorp-styles.css',
    }),
    new CopyPlugin(copyPluginConfig),
  ],
}

export default config
