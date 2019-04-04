const mysql = require('mysql');
const conexion = require('../conexion');

const historialJugador = (historial, callback)=>{
	conexion.query('SELECT * FROM jugadores WHERE nombre=?', historial.jugador, (error, resultado)=>{
		return callback(error, resultado);
	})
}

module.exports = {historialJugador};