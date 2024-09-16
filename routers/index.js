const express = require('express');
const router = express.Router();
const passport = require('passport');

const indexController = require('../controllers/index');

// Route for the home/welcome page
router.get('/', indexController.home);

// render the sign-up page
router.get('/signupPage', indexController.signup);

// render the sign-in page
router.get('/signinPage', indexController.signin);

//  log the user out and redirect to the sign-in page
router.get('/logout', indexController.logout);

// handle the sign-up form data submission
router.post('/signupData', indexController.signupData);

// If authentication fails, the user is redirected to the sign-in page
router.post('/signinData', passport.authenticate('local', { failureRedirect: '/signinPage' }), indexController.signinData);

// Any routes starting with '/user' will be handled by the user router
router.use('/user', require('./user'));

// Export the router;
module.exports = router;
