const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const morgan = require('koa-morgan');
const router = require('koa-router');
const render = require('koa-ejs');
const serve = require('koa-static');
const mount = require('koa-mount');

const path = require('path');
const hephaestus = require('./../../webpack/hephaestus');

const app = new Koa();
const views = path.join( process.cwd(), 'public' );
const assets = path.join( process.cwd(), 'public' );

// ------------------------------------------------
// Serve HTML Files - Handled By Koa Static
// TODO: Use RENDER when server side rendering is added
// ------------------------------------------------
// render(app, {
//   root: views,
//   layout: false,
//   viewExt: 'html',
//   cache: false,
//   debug: true
// });

// ------------------------------------------------
// Serve Static Files in Assets
// ------------------------------------------------
app.use(serve(assets));

// ------------------------------------------------
// Define Routes
// ------------------------------------------------
app.use(function *(){
  serve( views )
});

// ------------------------------------------------
// Build Production Index and Javascripts
// ------------------------------------------------
hephaestus.build('production');

// ------------------------------------------------
// Logging
// ------------------------------------------------
app.use(morgan('dev'));

// ------------------------------------------------
// Body Parser
// ------------------------------------------------
app.use(bodyParser());

// ------------------------------------------------
// Start Server
// ------------------------------------------------
const PORT = process.env.PORT || 8086;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
