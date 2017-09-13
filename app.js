const express = require('express');
const app = express();

// The port, with a default of 3000
const port = process.env.port || 3000;

// Default route
app.get('/', function(req,res){
  res.render('index', {
    'title': 'Blog'
  })
});

// Set static public dir
app.use(express.static('./public'));

// Set view engine and location of view files
app.set('views', './views')
app.set('view engine', 'ejs');

// Bind port to server
app.listen(port,function(){
  console.log('Blog running on port 3000. Ctrl+C to close.')
})
