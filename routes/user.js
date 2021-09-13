//Import Required Libraries
const express = require('express')
const router = express.Router()

//Import controller
const UserController = require('../controllers/users')

//Import and require Passport
const passport = require("passport");
require("./../middlewares/passport")(passport);

//Login route
router.post('/login',UserController.login);

//Create User Route
router.post('/signup', UserController.register);

// Get the current user detail
// To check the user auth
router.get('/home', passport.authenticate("jwt",{session:false}), UserController.getCurrent)

//Export User Route
module.exports = router