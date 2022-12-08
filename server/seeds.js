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

const p = new Post({
    displayName: 'Saul Goodman',
    username: 'saul_goodman_aal',
    textContent: 'This is a post from Mongo/Mongoose!'
})

p.save().then(p => {
    console.log(p)
})
.catch( e => {
    console.log(e)
})