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

/* const p = new Post({
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
*/

const seedPosts = [
    {    
        displayName: 'John Smith',
        username: 'js1998',
        textContent: 'Test post #1'
    },
    {    
        displayName: 'Jane Doe',
        username: 'jaaaaneyDoe',
        textContent: 'Test post #2'
    },
    {    
        displayName: 'Walter White',
        username: 'heisenberg',
        textContent: 'Test post #3'
    },
    {    
        displayName: 'Jesse Pinkman',
        username: 'abqsbest17',
        textContent: 'Test post #4'
    },
]
Post.insertMany(seedPosts)
    .then(res => {
        console.log(res)
    })
    .catch (e => {
        console.log(e)
    })