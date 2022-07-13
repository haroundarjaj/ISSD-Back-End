module.exports = app => {
    const addressesController = require("../controllers/address.controller.js");
	var fs=require('fs');
    //console.log(addressesController)
	var router = require("express").Router();
	var router1 = require("express").Router();
	var router2 = require("express").Router();
	var router3 = require("express").Router();
    
    // Retrieve all addresses
    router.get("/", addressesController.getAll);
    // Retrieve a single address with id
    router.get("/:id", addressesController.getById);
	
	//router1.put("/:id",function(req,res){addressesController.indetermina})
	
	router1.put("/:id",addressesController.indetermina)
	
	router2.get('/xml', function(req, res){
    result=fs.readFileSync('configuracion.xml');
    res.end(result);
});

router2.get('/xmlapi', function(req, res){
    result=fs.readFileSync('normalizador_config.xml');
    res.end(result);
});

router3.post('/:id',addressesController.actualiza)
	
    app.use('/api/consulta', router);
	app.use('/api/indetermina', router1)
	app.use('/', router2)
	app.use('/api/actualiza', router3)
};