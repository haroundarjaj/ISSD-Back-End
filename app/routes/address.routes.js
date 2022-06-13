module.exports = app => {
    const addressesController = require("../controllers/address.controller.js");
    console.log(addressesController)
    var router = require("express").Router();
    // Retrieve all addresses
    router.get("/", addressesController.getAll);
    // Retrieve a single address with id
    router.get("/:id", addressesController.getById);

    app.use('/api/addresses', router);
};