const express = require("express");
const cors = require("cors");
const app = express();
var fs=require('fs');
var results
var mysql = require('mysql');

//const addressesController = require("./controllers/address.controller.js");
var corsOptions = {
    origin: "*"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ISSD application." });
});
require("./app/routes/address.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


/*var conexion= mysql.createConnection({
    host : '192.168.50.91',
    user : 'root2',
    password : 'admin',
	database : 'SD',
});


conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});

app.get('/xml', function(req, res){
    result=fs.readFileSync('configuracion.xml');
    res.end(result);
});

app.get('/xmlapi', function(req, res){
    result=fs.readFileSync('normalizador_config.xml');
    res.end(result);
});

//where EDO_NORMALIZACION="x"
app.get('/api/consulta',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	conexion.query('select * from direccion where EDO_NORMALIZACION="x"', (error,filas)=>{
		if(error){
			console.log(error)
		}
		else {
			res.send(filas)
		}
	})
});

app.get('/api/consulta/:id',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	conexion.query('select * from direccion where ID_DOMICILIO_RNUM = ?',[req.params.id], function(error,fila){
		if(error){
			console.log(error)
		}
		else {
			res.send(fila)
		}
	})
});

app.put('/api/indetermina/:id',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	let id = req.params.id;
	let sql = 'UPDATE direccion SET edo_normalizacion ="E"  WHERE ID_DOMICILIO_RNUM=?'
	conexion.query(sql,[id], function(error,results){
		if(error){
			console.log(error)
		}
		else {
			res.send(results)
		}
	})
});

app.post('/api/actualiza/:id', (req,res)=>{
	//console.log(req)
	res.header("Access-Control-Allow-Origin", "*");
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
	
	let sql = 'update direccion set EDO_NORMALIZACION="N", FECHA_ACTUALIZACION='+fecha+',METODO_NORMALIZACION='+tipo+', CODIGO_CORRECCION='+codigo+', SUBTITULO_salida='+tcalle+', CODIGO_POSTAL_salida='+codigo_postal+',ESTADO_salida='+estado+', CIUDAD_salida='+ciudad+', COLONIA_salida='+colonia+', CALLE_salida='+calle+', NUMERO_salida='+numero+', COORD_LONGITUD_SALIDA='+lat+',COORD_LATITUD_SALIDA='+lng+' where ID_DOMICILIO_RNUM=?'
	console.log("se createConnection")
	conexion.query(sql,[id], function(error,results){
		if(error){
			console.log(error)
		}
		else {
			res.send(results)
		}
	})
});*/
