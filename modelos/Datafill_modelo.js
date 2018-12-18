var conexion = require("../conexiones/connMySQL");

var modelo = function(){};

modelo.get = function(where, cb){
    conexion.query("SELECT * FROM tb_datafill WHERE activo = 1 AND ?;", where, cb);
}

modelo.get2 = function(where, cb){
    conexion.query("SELECT d.* FROM tb_datafill d LEFT JOIN tb_servicio s ON s.id = d.servicio WHERE d.activo = 1 AND (s.tipo_servicio = 1 OR s.tipo_servicio = 6) AND ?;", where, cb);
}

module.exports = modelo;