// Express

const express = require('express')
const app = express()
const path = require('path');

// Controllers

const postsController = require('./controllers/posts');
const usersController = require('./controllers/users');

// Mongoose

const mongoose = require('mongoose');
const Post = require('./models/post');

// Host, Port, dotenv

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

require('dotenv').config();

// Database connection

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database")
    })
    .catch(err => {
        console.log("Error connecting")
        console.log(err)
    })

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();

})

app
.get('/activity', async (req, res) => {
    const posts = await Post.find({})
    console.log(posts)      
})
.use('/api/v1/posts', postsController)
.use('/api/v1/users', usersController)

app.get('*', (req, res) => {
    
    res.sendFile('index.html', {root: '../client/'});
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/*
 If server is hanging most likely there is an issue with calling res/next/req.
    req is request.
    res is response. 
    200 is information. 
    201 is created item. 
    300 is a redirect.
    400 is a bad request (client side). 
    500 is a server side issue. */
