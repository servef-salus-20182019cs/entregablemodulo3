const mysql = require('mysql');
const conexion = require('../conexion');

const historialJugador = (historial, callback)=>{
	conexion.query('SELECT j.nombre, jE.fecha_inicio, e.club FROM jugadores AS j INNER JOIN jugador_equipo AS jE ON (j.id_jugador = jE.id_jugador) INNER JOIN equipos AS e ON (e.id_equipo = jE.id_equipo) WHERE j.nombre LIKE "%"?"%" ORDER BY jE.fecha_inicio DESC', historial.jugador, (error, resultado)=>{
		return callback(error, resultado);
	})
}

module.exports = {historialJugador};