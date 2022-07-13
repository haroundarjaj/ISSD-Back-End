const sql = require("./db.js");
var fs=require('fs');

const getAll = (result) => {
    let query = "select * from direccion WHERE edo_normalizacion='x'";
    sql.query(query, (err, res) => {
        if (err) {
            //console.log("error: ", err);
            result(null, err);
            return;
        }
        //console.log("addresses: ", res);
        result(null, res);
    });
};

const getById = (id, result) => {
    let query = "select * from direccion where ID_DOMICILIO_RNUM = " + id;
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("addresses: ", res);
        result(null, res);
    });
};

const indetermina = (id, result) => {
    let query = 'UPDATE direccion SET edo_normalizacion ="E"  WHERE ID_DOMICILIO_RNUM=' + id;
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("addresses: ", res);
        result(null, res);
    });
};

const actualiza = (req, result) => {
	let id = req.params.id;
	let estado= JSON.stringify(req.query.estado);
	let ciudad= JSON.stringify(req.query.ciudad);
	let municipio = JSON.stringify(req.query.municipio);
	let colonia = JSON.stringify(req.query.colonia);
	let calle = JSON.stringify(req.query.calle);
	let numero = JSON.stringify(req.query.numero);
	let lat = JSON.stringify(req.query.lat);
	let lng= JSON.stringify(req.query.lng);
	let codigo_postal= JSON.stringify(req.query.codigo_postal);
	let codigo= JSON.stringify(req.query.codigo);
	let tcalle = JSON.stringify(req.query.tcalle);
	let tipo = JSON.stringify(req.query.tipo);
	let fecha = JSON.stringify(req.query.fecha);
	console.log("----------------------------------------")
	console.log(req.query)
    let query = 'update direccion set EDO_NORMALIZACION="N", FECHA_ACTUALIZACION='+fecha+',METODO_NORMALIZACION='+tipo+', CODIGO_CORRECCION='+codigo+', SUBTITULO_salida='+tcalle+', CODIGO_POSTAL_salida='+codigo_postal+',ESTADO_salida='+estado+', CIUDAD_salida='+ciudad+', COLONIA_salida='+colonia+', CALLE_salida='+calle+', NUMERO_salida='+numero+', COORD_LONGITUD_SALIDA='+lat+',COORD_LATITUD_SALIDA='+lng+' where ID_DOMICILIO_RNUM='+id;
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("addresses: ", res);
        result(null, res);
    });
};





module.exports = {
    getAll,
    getById,
	indetermina,
	actualiza
};