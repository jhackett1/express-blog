var express = require('express');
var postRouter = express.Router();
const mongodb = require('mongodb').MongoClient;


var router = function(){


  // List route
  postRouter.route('/')
    .get(function(req, res){
      // Location of mongo DB
      var url = "mongodb://localhost:27017/blog";
      // Make DB connection
      mongodb.connect(url, function(err, db){
        // Grab the posts table
        var collection = db.collection('posts');
        collection.find({}).toArray(function(err, results){
          res.render('index', {
            'sitename': 'Blog',
            'siteslogan': "You've reached the blog",
            posts: results
          })
        })
      });
    })

  // Single post route
  postRouter.route('/:title')
    .get(function(req, res){
      // Make ID available for use
      var titleQuery = req.params.title;
      // Location of mongo DB
      var url = "mongodb://localhost:27017/blog";
      // Make DB connection
      mongodb.connect(url, function(err, db){
          // Grab the posts table
          var collection = db.collection('posts');
          // Pull out the right post and pass to view
          collection.findOne({post_title: titleQuery},
          function(err, results){
            res.render('single', {
              'sitename': 'Blog',
              'siteslogan': "You've reached the blog",
              post: results
            })
          })
      });
    });

  return postRouter;
};

module.exports = router;
