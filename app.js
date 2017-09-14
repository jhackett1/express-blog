const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// The port, with a default of 3000
const port = process.env.port || 3000;

// Set up body parser, cookie parser and session
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'blogsecret'}));
require('./config/passport')(app);

// Get the route files...
const adminRouter = require('./routes/adminRoutes.js')();
const postRouter = require('./routes/postRoutes.js')();
const authRouter = require('./routes/authRoutes.js')();
// ...and register them
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/', postRouter);

// Set static public dir
app.use(express.static('./public'));

// Set view engine and location of view files
app.set('views', './views')
app.set('view engine', 'ejs');

// Bind port to server
app.listen(port,function(){
  console.log('Blog running on port 3000. Ctrl+C to close.')
})
