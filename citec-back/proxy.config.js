const proxy = [
    {
      context: '/api',
      target: 'http://localhost: 3006',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;