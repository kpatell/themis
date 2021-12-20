const react = require('react');
const axios = require('axios');

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

exports.getAllQueue = async () => {
    try {
        const res = await axios.get(`http://localhost:3001/queue`);
        return res.data;
    } catch (error) {
        console.log(`An error occurred while trying to retrieve all elements in the queue: ${error}`);
    };
}

exports.getElementInQueue = async (elementId) => {
    try {
        const res = await axios.get(`http://localhost:3001/queue/${elementId}`);
        return res.data;
    } catch (error) {
        console.log(`An error occurred while trying to retrieve element in queue with id ${elementId}: ${error}`);
    };
}