/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  
  const config = exports = {};

  config.keys = appInfo.name + '_1669905069827_7233';

  config.middleware = [];

  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
