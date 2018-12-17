var modelo = require("../modelos/Tickets_modelo");

var controlador = function(){};

controlador.insertar = function(req, res, next){
	modelo.insertar(req, function(err) {
		if(!err) {
			
		} else {
			var data = {error: err};
			next(data);
		}
	})
}

controlador.maxId = function(req, res, next){
	var data = modelo.maxId(function(err, resp) {
		if(!err) {
			data = {maximo: resp[0].maximo};
			next(data);
		} else {
			data = {error: err};
			next(data);
		}
	});

	return data;
}

controlador.select_ids = function(req, res, next){
	modelo.select_ids(function(err, resp) {
		if(!err) {
			var data = {ids: resp};
			next(data);
		} else {
			data = {error: err};
			next(data);
		}
	});

	return data;
}

controlador.ultimo_cambio = function(req, res, next){
	modelo.ultimo_cambio(function(err, resp) {
		if(!err) {
			var data = {ids: resp};
			next(data);
		} else {
			data = {error: err};
			next(data);
		}
	});

	return data;
}

controlador.update = function(req, res, next){
	modelo.update(req.id, req.info, function(err, resp) {
		if(!err) {
			var data = {ids: resp};
			next(data);
		} else {
			data = {error: err};
			next(data);
		}
	});
}

controlador.insertar_cambio = function(req, res, next){
	modelo.insertar_cambio(req, function(err) {
		if(!err) {
			
		} else {
			var data = {error: err};
			next(data);
		}
	})
}

module.exports = controlador;