const mysql = require('mysql');
const conexion = require('../conexion');

const historialJugador = (historial, callback)=>{
	conexion.query('SELECT j.nombre, DATE_FORMAT(jE.fecha_inicio, "%d/%m/%y") AS fecha,  e.club FROM jugadores AS j INNER JOIN jugador_equipo AS jE ON (j.id_jugador = jE.id_jugador) INNER JOIN equipos AS e ON (e.id_equipo = jE.id_equipo) WHERE j.nombre LIKE "%"?"%" ORDER BY fecha DESC', historial.jugador, (error, resultado)=>{
		return callback(error, resultado);
	})
}

const equiposNBA = (callback)=>{
	conexion.query('SELECT * FROM equipos', (error, resultado)=>{
		if (error) throw error;
		else {
			return callback(error, resultado);
		}
	})
}

const jugadoresNBA = (callback)=>{
	conexion.query('SELECT * FROM jugadores', (error, resultado)=>{
		if (error) throw error;
		else {
			return callback(error, resultado);
		}
	})
}

const nuevoRegistro = (registro, callback)=>{
	conexion.query('INSERT INTO jugadores (nombre) VALUES ("'+ registro.nombre + '")', (error,resultado)=>{
		if (error) throw error;
        else {
			return callback(error, resultado);
		}
	})
}

const registroTemporadas = (registro1, callback)=>{
	console.log(registro1);
	conexion.query('INSERT INTO jugador_equipo (id_jugador, id_equipo, fecha_inicio, fecha_fin) VALUES ("'+ registro1.nombresJugadores + '","' + registro1.nombresEquipos + '","' + registro1.anyoini + '","' + registro1.anyofin + '")', (error,resultado)=>{
		if (error) throw error;
        else {
			return callback(error, resultado);
		}
	})
}

module.exports = {historialJugador, equiposNBA, jugadoresNBA, nuevoRegistro, registroTemporadas};
