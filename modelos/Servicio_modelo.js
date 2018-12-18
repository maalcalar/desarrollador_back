var conexion = require("../conexiones/connMySQL");

var modelo = function(){};

modelo.contar_total = function(cb){
	conexion.query("SELECT COUNT(*) AS cuenta FROM tb_servicio WHERE activo = 1;", cb);
}

modelo.listado_servicio_datafill = function(cb){
	conexion.query("SELECT * FROM tb_servicio WHERE activo = 1;", cb);
}

modelo.listado_agregadores = function(cb){
	conexion.query("SELECT d.agregador, si.nombre FROM tb_servicio s LEFT JOIN tb_datafill d ON d.servicio = s.id LEFT JOIN tb_sitio si ON si.id = d.agregador WHERE s.activo = 1 AND d.agregador != 0 GROUP BY agregador", cb);
}

module.exports = modelo;