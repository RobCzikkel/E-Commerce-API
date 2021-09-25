var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const userService = require('./user');

passport.serializeUser((user, done) => done(null, user.id));   //this will add id to req.user object
passport.deserializeUser((id, done) => done(null, { id }));

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await userService.login({username, password});  // custom function that checks user and validates password
      return done(null,user);
    } catch(error) {
      return done(error)
    }
  }
));