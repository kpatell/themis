const Element = require('../models/element.model.js');

// Create and Save a new element
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Element content can not be empty"
        });
    }

    // Create a new element to put in queue
    const element = new Element({
        name: req.body.name || "Test Name", 
        email: req.body.email || "test@gmail.com", 
        phone_number: req.body.phone_number || "XXX-XXX-XXXX"
    });

    // Save element in the database
    element.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the element."
        });
    });
};

// Retrieve and return all elements in queue from the database.
exports.findAll = (req, res) => {
    Element.find()
    .then(queue => {
        res.send(queue);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the queue."
        });
    });
};

// Find a single element in queue with a elementId
exports.findOne = (req, res) => {
    Element.findById(req.params.elementId)
    .then(element => {
        if (!element) {
            return res.status(404).send({
                message: "Element not found with id " + req.params.elementId
            });            
        }
        res.send(element);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Element not found with id " + req.params.elementId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving element with id " + req.params.elementId
        });
    });
};

// Update an element identified by the elementId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Element content can not be empty"
        });
    }

    // Find note and update it with the request body
    Element.findByIdAndUpdate(req.params.elementId, {
        name: req.body.name || "Test Name", 
        email: req.body.email || "test@gmail.com", 
        phone_number: req.body.phone_number || "XXX-XXX-XXXX"
    }, {new: true})
    .then(element => {
        if (!element) {
            return res.status(404).send({
                message: "Element not found with id " + req.params.elementId
            });
        }
        res.send(note);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Element not found with id " + req.params.elementId
            });                
        }
        return res.status(500).send({
            message: "Error updating element with id " + req.params.elementId
        });
    });
};

// Delete an element with the specified elementId in the request
exports.delete = (req, res) => {
    Element.findByIdAndRemove(req.params.elementId)
    .then(element => {
        if (!element) {
            return res.status(404).send({
                message: "Element not found with id " + req.params.elementId
            });
        }
        res.send({message: "Element deleted successfully!"});
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Element not found with id " + req.params.elementId
            });                
        }
        return res.status(500).send({
            message: "Could not delete element with id " + req.params.elementId
        });
    });
};