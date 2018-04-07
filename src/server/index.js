const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const morgan = require('koa-morgan');
const Router = require('koa-router');
const render = require('koa-ejs');
const serve = require('koa-static');
const mount = require('koa-mount');

const hephaestus = require('./../../webpack/hephaestus');

const app = new Koa();
const router = new Router();

const views = path.join( process.cwd(), 'public' );
const assets = path.join( process.cwd(), 'public' );
const indexTemplate = path.join( views, 'index.html' );

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
// app.use(function *(){
//   serve( views )
// });

// router.get('/add', function* () {
//   console.log('Router Get');
//     serve( indexTemplate );
//      if (!this.status) this.throw(404)
// })


// router.get('/', (ctx, next) => {
//   console.log(ctx.router);
//   // ctx.router available
// });
// router.redirect('*', '/');

// router.get('*', function(ctx, next){
//   console.log(ctx.params);
//   serve(indexTemplate);
//   // response.sendfile('./public/index.html');
// });

// TODO: You need to serve index.html here.  Do Not Redirect.
app.use(function *(){
  // this.body = 'Invalid URL!!!';
  // or redirect etc
  this.redirect('/');
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
