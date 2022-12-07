const data = require('..data/activity.json');

function getActivity() {
    return data.activity;
}

function getActivityItem(id) {
    return data.activity.find( a => a.id === id);
}

module.exports = {
    getActivity,
    getActivityItem
}