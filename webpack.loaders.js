var path = require('path');

module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public)/,
    loader: "babel-loader"
  },
  {
    test: /\.less$/,
    use: [
      'style-loader?sourceMap',
      'css-loader',
      'postcss-loader',
      'less-loader'
    ]
  },
  {
    test: /\.tsx?$/,
    loaders: ['awesome-typescript-loader'],
    include: path.join(__dirname, 'src')
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader?importLoaders=1',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: "inline",
          plugins: function () {
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        }
      }
    ]
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: "file-loader"
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    loader: "url-loader?prefix=font/&limit=5000"
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: "url-loader?limit=10000&mimetype=application/octet-stream"
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: "url-loader?limit=10000&mimetype=image/svg+xml"
  },
  {
    test: /\.gif/,
    exclude: /(node_modules|bower_components)/,
    loader: "url-loader?limit=10000&mimetype=image/gif"
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    loader: "url-loader?limit=10000&mimetype=image/jpg"
  },
  {
    test: /\.png/,
    exclude: /(node_modules|bower_components)/,
    loader: "url-loader?limit=10000&mimetype=image/png"
  }
]