var modelo = require("../modelos/Datafill_modelo");

var controlador = function(){};

controlador.get = function(req, res, next){
    var data = null;
	modelo.get(req, function(err, resp) {
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

controlador.get2 = function(req, res, next){
    var data = null;
	modelo.get2(req, function(err, resp) {
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