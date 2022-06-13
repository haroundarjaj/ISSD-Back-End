const model = require("../models/address.model.js");
// Retrieve all addresses from the database
exports.getAll = (req, res) => {
    model.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
};
// Find a single address with a id
exports.getById = (req, res) => {
    model.getById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found data with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving data with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};