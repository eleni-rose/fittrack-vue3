/* const data = require('../data/posts.json');
const { connect } = require('./mongo');
const { ObjectId } = require('mongodb');

const COLLECTION_NAME = 'posts';


async function collection() {
    const client = await connect();
    return client.db('fittrack').collection(COLLECTION_NAME);
}

async function getPosts() {
    const db = await collection();
    const data = await db.find().toArray()
    return { 
        total: data.length, 
        limit: data.length, 
        posts: data };
}

async function getPost(id) {
    const db = await collection();
    const data = await db.findOne({ _id: new ObjectId(id) })
    return data;
}

async function addPost(post) {
    const db = await collection();
    const result = await db.insertOne(post)
    return result;
}

async function updatePost(id, post){
    const db = await collection();
    delete post._id;
    const result = await db.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: post },
        { returnDocument: 'after' })
    return result.value;
}

async function deletePost(id) {
    const db = await collection();
    const result = await db.deleteOne({ _id: new ObjectId(id) })
    return result;
}

async function getTag() {
    const db = await collection();
    const data = await db.distinct('postTag')
    return data;
}

async function getTimeDate() {
    const db = await collection();
    const data = await db.distinct('timeDate')
    return data;
}

async function seed() {
    const db = await collection();
    db.insertMany(data.products);
    return 'Seed successful!';
}

module.exports = {
    COLLECTION_NAME,
    collection,
    getPosts,
    getPost,
    addPost,
    updatePost,
    deletePost,
    getTag,
    getTimeDate,
    seed
};

*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    
    username: {
        type: String,
        required: false
    },
    displayName: {
        type: String,
        required: false
    },
    postText: {
        type: String,
        required: false
    },
    postImg: {
        type: String,
        required: false
    },
    postTag: {
        type: String,
        required: false
    },
    timeDate: {
        type: String,
        required: false
    },
    profileImg: {
        type: String,
        required: false
    },
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;