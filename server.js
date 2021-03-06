const { createServer } = require('http');
const next = require('next');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

const PORT = process.env.PORT || 3000;
/*
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
*/

app.prepare().then(() => {
  createServer(handler).listen(PORT, err => {
    if (err) throw err;
    console.log(`Our app is running on port ${ PORT }`);
  });
});