const User = require('../models/userSchema');

module.exports.home = (req,res) => {
    return res.render('welcomePage')
}

module.exports.signup = (req,res) => {
    return res.render('signupPage')
}

module.exports.signin = (req,res) => {
    return res.render('signinPage')
}

module.exports.signupData = async (req,res) => {
    const user = await User.findOne({email : req.body.email});
    if(user){
        return res.redirect('/signinPage');
    }else{
      const newUser = await User.create(req.body);
      if(newUser){
        return res.redirect('/signinPage');
      }else{
        return res.redirect('/signupPage');
      }
    }
}

module.exports.signinData = (req,res) => {
    return res.redirect('/user');
}

module.exports.logout = (req,res) => {
    return req.logout(req.user, err => {
        if(err) return next(err);
        res.redirect("/signinPage");
      });
}


// For HabitTracker Data

