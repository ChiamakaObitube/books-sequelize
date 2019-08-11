const path = require('path')

module.exports = {
  "config": path.resolve('./src/server/config', 'config.js'),
  "models-path": path.resolve('./src/server/models'),
  "seeders.path": path.resolve('.server/src/seeders'),
  "migrations-path": path.resolve('./server/src/migrations')
};