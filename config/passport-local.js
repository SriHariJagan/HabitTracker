const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/userSchema');


passport.use(new LocalStrategy({passReqToCallback : true},async function(req,email, password, done) {
    try{
        const user = await User.findOne({ email :email });
        if (!user || (user.password != password)) { 
            return done(null, false); 
        }
        return done(null, user);
    }catch(err){
        console.log(err);
        return;
    }
}));



passport.serializeUser(function(user, done) {
    return done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    return done(null, user);
  });

passport.checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { return next() }
    return res.redirect("/signinPage");
}

passport.setAuthenticatedUser = (req, res, next) => {
    if (req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;