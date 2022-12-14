const express = require('express');
const app = express.Router();

const Post = require('../models/post');

app
    .get('/', (req, res, next) => {
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

module.exports = app;