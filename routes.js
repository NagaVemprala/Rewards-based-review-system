const routes = require('next-routes')();

routes
.add('/products/newProduct', '/products/newProduct')
.add('/products/:address', '/products/showProduct')
.add('/products/:address/reviews', '/products/reviews/index')
.add('/products/:address/:reviewNumber', '/products/showProduct')
.add('/products/:address/reviews/new', '/products/showProduct');
module.exports = routes;