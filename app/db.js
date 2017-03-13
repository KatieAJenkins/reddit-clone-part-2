module.exports = require('knex')(require('../app/knexfile')[process.env.NODE_ENV || 'development'])
