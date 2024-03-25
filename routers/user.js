const express = require('express');
const router = express.Router();
const passport = require('passport')

const userController = require('../controllers/user');

router.get('/',passport.checkAuthenticated,userController.userHomePage);
router.get('/status/:id/:date',userController.habitStatus);
router.get('/delet/:id',userController.deletHabit);

router.post("/view",userController.view);
router.post('/habit',userController.habit);


module.exports = router;