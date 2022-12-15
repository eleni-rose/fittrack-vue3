const Post = require('../models/post');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express.Router();

// Get a single post
const getPost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json(workouts)
    }

    const post = await Post.findById(id)

    if (!post) {
        return res.status(404).json({error: '404! Post not found!'})
    }
    else {
        res.status(200).json(post)
    }
}

// Get all posts

const getPosts = async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
}

// Create a post
const createPost = async (req, res) => {
    const {username, displayName, postText } = req.body

    try {
        const post = await Post.create({ username, displayName, postText })
        res.status(200).json(post)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete post
// update post


    /*.get('/', (req, res, next) => {
        posts.getPosts()
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .get('/tags', (req, res, next) => {
        posts.getTags()
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .get('/time', (req, res, next) => {
        posts.getTimeDate()
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {

        posts.getPost(req.params.id)
        .then(post=> {
            if (post) {
                res.status(200).send(post);
            } else {
                res.status(404).send('404: Post not found!');
            }            
        })
        .catch(next);
        
    })
    .post('/', (req, res, next) => {
        posts.addPost(req.body)
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .patch('/:id', (req, res, next) => {
        posts.updatePost(req.params.id, req.body)
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        posts.deletePost(req.params.id)
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .post('/seed', (req, res, next) => {
        posts.seed()
        .then(x=> res.status(200).send(x))
        .catch(next);
    });
    */

module.exports = {
    getPost,
    getPosts,
    createPost
};

module.exports = app;