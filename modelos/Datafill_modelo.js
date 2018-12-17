var conexion = require("../conexiones/connMySQL");

var modelo = function(){};

modelo.get = function(where, cb){
    conexion.query("SELECT * FROM tb_datafill WHERE activo = 1 AND ?;", where, cb);
}

module.exports = modelo;