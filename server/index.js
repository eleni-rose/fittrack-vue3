const express = require('express')
const app = express()

const activityController = require('./controllers/activity'); // always have requires at the top of the file

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('FitTrack');
})

/// req is request, res is response. 200 is information. 201 is created item. 300 is a redirect.
// 400 is a bad request (client side). 500 is a server side issue.

app.use('/', express.static('./client/dist'));

////

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.httpCode ?? 500).send({
        message: err.message ?? 'Something went wrong.',
        status: err.httpCode ?? 500
    });
})

//// If server is hanging most likely there is an issue with calling res/next/req.

app
.get('/', (req, res) => {
    res.status(200).send('hello');
})
.use('api/activity', activityController) 

////

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: './client/dist'});
})

////

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});