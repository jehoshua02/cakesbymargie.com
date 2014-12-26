var configure = function (config) {

  config.resolve.extensions.push('.jsx'); // you can now require('file') instead of require('file.jsx')

  config.module.loaders.push({ test: /\.jsx?$/, loader: 'jsx-loader?harmony' });

  // config.externals['react'] = {
  //   root: "React",
  //   commonjs: "react",
  //   commonjs2: "react",
  //   amd: "react"
  // };

  // config.externals["react/addons"] = {
  //   root: "React",
  //   commonjs: "react/addons",
  //   commonjs2: "react/addons",
  //   amd: "react/addons"
  // };

};

module.exports = configure;
