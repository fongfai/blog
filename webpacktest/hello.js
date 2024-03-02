function HelloWorldPlugin(options) {
  // 使用 options 设置插件实例……
}

HelloWorldPlugin.prototype.apply = function(compiler) {
  console.log('HelloWorldPlugin-start!');
  compiler.plugin('emit', function(compiliation, callback) {
    console.log('Hello World!');
    callback()
  });
};

module.exports = HelloWorldPlugin;