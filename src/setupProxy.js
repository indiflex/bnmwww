const { createProxyMiddleware } = require('http-proxy-middleware');

/*
 * proxy
 * ref: https://create-react-app.dev/docs/proxying-api-requests-in-development/
 */

module.exports = function (app) {
  app.use(
    ['/api', '/auth'],
    createProxyMiddleware({
      target: 'http://localhost:4001',
      changeOrigin: true,
    })
  );
};
