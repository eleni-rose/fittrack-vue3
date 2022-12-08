const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: false
    },
    textContent: {
        type: String,
        required: true
    },
    tagContent: {
        type: String,
        required: false
    },
    imgContent: {
        type: String,
        required: false
    },
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;