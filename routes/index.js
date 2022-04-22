const routes = require('express').Router();
routes.get('/', (req, res) => {
    res.send('Caley Fuller')
  })
  module.exports = routes;