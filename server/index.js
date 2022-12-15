// Express
const express = require('express')
const app = express()

// Controllers
const postsController = require('./controllers/posts');
const usersController = require('./controllers/users');

// Host, Port
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// env
const dotenv = require("dotenv");
dotenv.config();

// Mongoose
const mongoose = require("mongoose");
const Post = require('./models/post');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log("Connected to database at", process.env.PORT)
    })
    .catch(err => {
        console.log("Error connecting to database")
        console.log(err)
    })

//
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', express.static('../client/'));
app.use(express.json());

app
    .get('/', (req, res) => {
        res.status(200).send('Default page working! You did it!');
    })
    .get('/error', (req, res) => {
        res.status(500).send('Uh oh. Something broke.');
    })
    .use('/api/v1/posts', postsController)

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: '../client/'});
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status( err.httpCode ?? 500).send({
        message: err.message ?? 'Uh oh. Something broke.',
        status: err.httpCode ?? 500
    });
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
