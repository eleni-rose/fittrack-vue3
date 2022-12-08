const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('..data/posts.json');

const PostSchema = new Schema({
    displayName: String,
    username: String,
    profilePic: Image,
    content: String,
    image: Image,
})

module.exports = mongoose.model('Post', PostSchema);