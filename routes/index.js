const fibAndprimeRoutes = require('./fibonacciAndprime');

const constructor = (app) => {
    app.use('/', fibAndprimeRoutes);
    app.use('*', (req, res) => {
      res.redirect('/');
    });
  };
  
  module.exports = constructor;