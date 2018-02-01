'use strict';

module.exports = {
  dev: {
    script: './server.js',
    options: {
      nodeArgs: ['--inspect=127.0.0.1:9230'],
      cwd: 'src'
    }
  }
};
