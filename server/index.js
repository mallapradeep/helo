require('dotenv').config();
const express = require('express')
, session = require('express-session')
, massive = require('massive')
, axios = require('axios');

//initialize express app
const app = express();

const controller = require('./controller');

//destructure from process.env
const { 
    SERVER_PORT,
    SECRET,
    CONNECTION_STRING
    } = process.env 

//DATABASE CONNECTION
//app.set is taking d info n storing in d object
//db,db --> db is d key 
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

//middleware
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

//endpoints
app.post(`/api/auth/register`, controller.register );
app.post(`/api/auth/login`, controller.login );
app.get(`/api/post/:userid`, controller.getUserPosts);
app.post(`/api/posts/:userid`, controller.createUserPosts);
app.get(`/api/posts/post/:postid`, controller. getSinglePost);





//listen port
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})