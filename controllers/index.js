const User = require('../models/userSchema');

//the welcome/home page
module.exports.home = (req, res) => {
    return res.render('welcomePage'); // Render the 'welcomePage' view
}

//rendering the sign-up page
module.exports.signup = (req, res) => {
    return res.render('signupPage'); // Render the 'signupPage' view
}

//rendering the sign-in page
module.exports.signin = (req, res) => {
    return res.render('signinPage'); // Render the 'signinPage' view
}

// handling sign-up form data
module.exports.signupData = async (req, res) => {
    // Check if a user with the given email already exists
    const user = await User.findOne({ email: req.body.email });

    if (user) {
        // If user exists, redirect to the sign-in page
        return res.redirect('/signinPage');
    } else {
        // Create a new user with the data from the request body
        const newUser = await User.create(req.body);

        if (newUser) {
            return res.redirect('/signinPage');
        } else {
            return res.redirect('/signupPage');
        }
    }
}

//redirecting to user Page
module.exports.signinData = (req, res) => {
    return res.redirect('/user'); 
}

//logging out the user
module.exports.logout = (req, res) => {
    return req.logout(req.user, err => {
        if (err) return next(err); 
        res.redirect("/signinPage"); 
    });
}
