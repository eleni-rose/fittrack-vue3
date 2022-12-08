const { triggerAsyncId } = require('async_hooks');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const express = require('express')
const app = express()

const mongoose = require('mongoose');
const Post = require('./models/post');

mongoose.connect('mongodb://localhost:27017/fittrack', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to database")
    })
    .catch(err => {
        console.log("error connecting")
        console.log(err)
    })

//const activityController = require('./controllers/activity');

app.use('/', express.static('./client/dist'));

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.httpCode ?? 500).send({
        message: err.message ?? 'Something went wrong.',
        status: err.httpCode ?? 500
    });
})

app
.get('/', (req, res) => {
    res.status(200).send('hello');
})
//.use('api/activity', activityController) 

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: './client/dist'});
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/* If server is hanging most likely there is an issue with calling res/next/req.
    req is request.
    res is response. 
    200 is information. 
    201 is created item. 
    300 is a redirect.
    400 is a bad request (client side). 
    500 is a server side issue. */
