module.exports = (app) => {
    const queue = require('../controllers/element.controller.js');

    // Create a new element in queue
    app.post('/queue', queue.create);

    // Retrieve all elements in queue
    app.get('/queue', queue.findAll);

    // Retrieve a single element in queue with elementId
    app.get('/queue/:elementId', queue.findOne);

    // Update an element with elementId
    app.put('/queue/:elementId', queue.update);

    // Delete an element with elementId
    app.delete('/queue/:elementId', queue.delete);
}