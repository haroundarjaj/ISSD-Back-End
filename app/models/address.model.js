const sql = require("./db.js");

const getAll = (result) => {
    let query = "select * from direccion limit 30";
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

module.exports = {
    getAll,
    getById
};