const mysql = require('mysql');
const conexion = require('../conexion');

const historial = (receta,callback)=>{
	conexion.query('SELECT * FROM jugador WHERE id_jugador=?')
}


const consultaReceta = (id, callback)=>{
	console.log(id);
	conexion.query('SELECT * FROM recetas WHERE id_receta=?', id, (error, resultado)=>{
		return callback(error, resultado);
	})
}

module.exports = {historial};