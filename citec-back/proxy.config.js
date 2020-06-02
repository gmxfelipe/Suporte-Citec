const proxy = [
    {
      context: '/api',
      target: 'http://localhost: 21389',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;