'use strict';

var routes = require('next-routes')();

routes.add('/products/newProduct', '/products/newProduct').add('/products/:address', '/products/showProduct').add('/products/:address/reviews', '/products/reviews/index').add('/products/:address/:reviewNumber', '/products/showProduct').add('/products/:address/reviews/new', '/products/showProduct');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNDLEFBREQsSUFDSyxBQURMLHdCQUM2QixBQUQ3Qix3QkFFQyxBQUZELElBRUssQUFGTCxzQkFFMkIsQUFGM0IseUJBR0MsQUFIRCxJQUdLLEFBSEwsOEJBR21DLEFBSG5DLDJCQUlDLEFBSkQsSUFJSyxBQUpMLG9DQUl5QyxBQUp6Qyx5QkFLQyxBQUxELElBS0ssQUFMTCxrQ0FLdUMsQUFMdkM7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3ZtdDkwNy9Eb2N1bWVudHMvZWNvbW1lcmNlZmluYWwtcmVhY3QifQ==