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
//indeterminate an address
exports.indetermina = (req, res) => {
    model.indetermina(req.params.id, (err, data) => {
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
//get xml for maped data of database
exports.getXml = (req, res) => {
    model.getXml((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
};
//get xml for maped data of database
exports.getXmlapi = (req, res) => {
    model.getXmlapi((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
};

//update an address
exports.actualiza = (req, res) => {
	//req.params.id
    model.actualiza(req, (err, data) => {
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