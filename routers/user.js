const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user');

// Route for the user home page if authenticated
router.get('/', passport.checkAuthenticated, userController.userHomePage);

// Route to get the status of a habit by its ID and date
router.get('/status/:id/:date', userController.habitStatus);

// Route to delete a habit by its ID
router.get('/delet/:id', userController.deletHabit);

//  fetching habits based on user input
router.post('/view', userController.view);

// handles form submission for creating a new habit
router.post('/habit', userController.habit);

module.exports = router;
