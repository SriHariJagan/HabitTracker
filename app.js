const express = require('express');
const port = 8000;
const app = express();

// database configuration
const db = require('./config/mongoose');

// local passport strategy
const passportLocal = require('./config/passport-local'); 

// session management
const session = require('express-session');

// Passport authentication
const passport = require('./config/passport-local');

// express-ejs-layouts for layout management in EJS views
const expressLayouts = require('express-ejs-layouts');

// Serve static files from the "asserts" folder
app.use(express.static('asserts'));

// Middleware to parse URL-encoded data 
app.use(express.urlencoded());

// Set EJS as the view engine
app.set('view engine', "ejs");

// Use express-ejs-layouts for managing layouts
app.use(expressLayouts);

// Configure express-session middleware
app.use(session({
    secret: 'keyboard cat',  
    resave: false,           
    saveUninitialized: true, 
    cookie: {
        maxAge: 600000       
    }
}));

// Initialize Passport for authentication
app.use(passport.initialize());

// Persistent login sessions
app.use(passport.session());

// Middleware to set the authenticated user in res.locals
app.use(passport.setAuthenticatedUser);

// Use the main router 
app.use('/', require('./routers'));

// Start the server on port 8000 and log status
app.listen(port, (err) => {
    if (err) {
        console.log("Error in express", err); 
        return;
    }
    console.log("Express is working...");    
});
