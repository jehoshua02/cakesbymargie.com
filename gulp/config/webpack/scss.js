var configure = function (config) {

  config.module.loaders.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      'autoprefixer-loader?{browsers:["last 2 version", "> 1%", "ie 8"]}',
      'sass-loader'
    ]
  });

};

module.exports = configure;
