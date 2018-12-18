var Servicios = require("./controladores/Servicio");
var Tipo_servicio = require("./controladores/Tipo_servicio");
var Datafill = require("./controladores/Datafill");
var Idu = require("./controladores/Idu");
var Sitio = require("./controladores/Sitio");

var express = require('express');
var cors = require('cors');
var request = require("request");
var fs = require("fs");

const app = express();
app.use(cors());

app
	.get('/servicios/contar_total', (req, res) => {
	var response;

	Servicios
		.contar_total(null, null, function(resp){
			response = resp.resp;
			
			res.json({resp: response});
		});
});

app
	.get('/servicios/listado_servicio_datafill', (req, res) => {
	var response;

	Servicios
		.listado_servicio_datafill(null, null, function(resp){
			response = resp.resp;

			response.forEach(function(r, ind, obj){
				Datafill.get({servicio: r.id}, null, function(dresp){
					obj[ind].datafill = dresp.resp;

					obj[ind].datafill.forEach(function(d, indd, objd){
						Idu.get({id: d.idu}, null, function(iresp){
							objd[indd].idu = (iresp.resp[0])? iresp.resp[0] : {nombre: ''} ;
						});

						Sitio.get({id: d.agregador}, null, function(sresp){
							objd[indd].agregador = sresp.resp[0];
						});

						Sitio.get({id: d.sitio}, null, function(sresp){
							objd[indd].sitio = sresp.resp[0];
						});

						if(indd == (objd.length - 1))
						{
							Tipo_servicio.get({id: r.tipo_servicio}, null, function(tsresp){
								obj[ind].tipo_servicio = tsresp.resp;
			
								if(ind == (obj.length - 1))
								{
									res.json({resp: response});
								}
							});
						}
					});
				});
			});
		});
});

app
	.get('/servicios/listado_agregadores', (req, res) => {
	var response;

	Servicios
		.listado_agregadores(null, null, function(resp){
			response = resp.resp;

			response.forEach(function(r, ind, obj){
				Datafill.get2({agregador: r.agregador}, null, function(dresp){
					obj[ind].datafill = dresp.resp;

					obj[ind].datafill.forEach(function(d, indd, objd){
						Idu.get({id: d.idu}, null, function(iresp){
							objd[indd].idu = (iresp.resp[0])? iresp.resp[0] : {nombre: ''} ;

							if(indd == (objd.length - 1))
							{
								if(ind == (obj.length - 1))
								{
									res.json({resp: response});
								}
							}
						});
					});
				});
			});
		});
});

app.listen(8000, () => {
	console.log('Example app listening on port 8000!')
});