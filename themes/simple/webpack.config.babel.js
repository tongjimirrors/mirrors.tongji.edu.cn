import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import postcssAutoprefixerPlugin from 'autoprefixer';
import stylusRupturePlugin from 'rupture';

const extractProjectCSS = new ExtractTextPlugin('main.css', { allChunks: true });
const extractVendorCSS = new ExtractTextPlugin('vendors.css', { allChunks: true });

function root(fn) {
  return path.resolve(__dirname, fn);
}

module.exports = {
  context: root('ui'),
  watchOptions: {
    aggregateTimeout: 500,
  },
  entry: {
    main: './Entry.js',
  },
  output: {
    path: root('source'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  resolve: {
    modulesDirectories: [root('node_modules'), root('ui')],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules\//,
      }
    ],
    loaders: [
      {
        // fonts
        test: /\.(svg|ttf|eot|woff|woff2|png|jpg)/,
        loader: 'file',
        query: {
          name: '[sha512:hash:base62:12].[ext]',
        },
      },
      {
        // ES2015 scripts
        test: /\.js$/,
        exclude: /node_modules\//,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'stage-0'],
          'plugins': ['lodash', 'transform-runtime'],
        },
      },
      {
        // project stylus stylesheets
        test: /\.styl$/,
        loader: extractProjectCSS.extract(['css', 'postcss', 'stylus?resolve url']),
      },
      {
        // vendors stylesheets
        test: /\.css$/,
        include: /node_modules\//,
        loader: extractVendorCSS.extract(['css']),
      },
      {
        // project stylesheets
        test: /\.css$/,
        exclude: /node_modules\//,
        loader: extractProjectCSS.extract(['css', 'postcss']),
      },
      {
        test: /\.vue$/,
        loader: 'vue',
      },
    ],
  },
  plugins: [

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    // don't include locale files in momentjs
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    // extract stylesheets into a standalone file
    extractVendorCSS,
    extractProjectCSS,

    // extract 3rd-party JavaScript libraries into a standalone file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js',
      minChunks: (module, count) => (
        module.resource
        && module.resource.indexOf(root('ui/')) === -1
        && module.resource.match(/\.js$/)
      ),
    }),

  ],
  postcss: () => [postcssAutoprefixerPlugin],
  stylus: {
    use: [
      stylusRupturePlugin(),
    ],
    import: [
      '~common/common.inc.styl',
    ]
  },
  eslint: {
    configFile: root('.eslintrc.yml'),
  },
};
