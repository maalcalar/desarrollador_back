var conexion = require("../conexiones/connMySQL");

var modelo = function(){};

modelo.insertar = function(objTicket, cb){
	conexion.query("INSERT INTO tb_tickets SET ?", objTicket, cb);
}

modelo.maxId = function(cb){
	conexion.query("SELECT COALESCE(MAX(id),0) maximo FROM tb_tickets;", cb);
}

modelo.select_ids = function(cb){
	conexion.query("SELECT id FROM tb_tickets;", cb);
}

modelo.ultimo_cambio = function(cb){
	conexion.query("SELECT COALESCE(MAX(id),0) maximo FROM tb_cambios_tickets;", cb);
}

modelo.update = function(idAdj, obj, cb){
	conexion.query("UPDATE tb_tickets SET ? WHERE id = ?", [obj, idAdj], cb);
}

modelo.insertar_cambio = function(objTicket, cb){
	conexion.query("INSERT INTO tb_cambios_tickets SET ?", objTicket, cb);
}

module.exports = modelo;