var conexion = require("../conexiones/connMySQL");

var modelo = function(){};

modelo.contar_total = function(cb){
	conexion.query("SELECT COUNT(*) AS cuenta FROM tb_servicio WHERE activo = 1;", cb);
}

modelo.listado_servicio_datafill = function(cb){
	conexion.query("SELECT * FROM tb_servicio WHERE activo = 1;", cb);
}

module.exports = modelo;