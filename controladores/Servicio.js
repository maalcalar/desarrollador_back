var modelo = require("../modelos/Servicio_modelo");

var controlador = function(){};

controlador.contar_total = function(req, res, next){
    var data = null;
	modelo.contar_total(function(err, resp) {
		if(!err) {
			data = {resp: resp[0]['cuenta']};
			next(data);
		} else {
			data = {error: err};
			next(data);
		}
	});

	return data;
}

controlador.listado_servicio_datafill = function(req, res, next){
    var data = null;
	modelo.listado_servicio_datafill(function(err, resp) {
		if(!err) {
			data = {resp: resp};
			next(data);
		} else {
			data = {error: err};
			next(data);
		}
	});

	return data;
}

module.exports = controlador;