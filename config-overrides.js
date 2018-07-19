const {injectBabelPlugin} = require('react-app-rewired');


module.exports = function overrride(config, env){
  config = injectBabelPlugin('babel-plugin-styled-components', config);
  
  return config;
}
// config.plugins.minify = false;