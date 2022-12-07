const express = require('express');
const activity = require('../models/post');

const app = express.Router();

app
    .get('/', (req,res) => {
        res.status(200).send(activity.getActivity());
    })

    .get('/:id', (req, res) => {
        const activity = activityItem.getActivity(req.params.id);

        if (activity) {
            res.status(200).send(activity);
        }
        
        else {
            res.status(404).send('Page not found.');
        }
    })

module.exports = app; 