var passport = require('passport');

module.exports = function(app){
  // Initialise passport
  app.use(passport.initialize());
  app.use(passport.session());

  // User management
  passport.serializeUser(function(user,done){
    done(null, user)
  });
  passport.deserializeUser(function(userId,done){
    done(null, user)
  });

  //Authentication strategy
  require('./strategies/local.strategy');


}
