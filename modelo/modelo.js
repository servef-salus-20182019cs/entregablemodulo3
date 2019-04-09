const mysql = require('mysql');
const conexion = require('../conexion');

const historialJugador = (historial, callback)=>{
	conexion.query('SELECT j.nombre, jE.fecha_inicio, e.club FROM jugadores AS j INNER JOIN jugador_equipo AS jE ON (j.id_jugador = jE.id_jugador) INNER JOIN equipos AS e ON (e.id_equipo = jE.id_equipo) WHERE j.nombre LIKE "%"?"%" ORDER BY jE.fecha_inicio DESC', historial.jugador, (error, resultado)=>{
		return callback(error, resultado);
	})
}
const insertaJugador = (datos, callback)=>{
	/*console.log("entro aquí 2");*/
	conexion.query('INSERT INTO jugadores (nombre, equipo_actual, fecha_fichaje) VALUES ("' + datos.nombre + '", "' + datos.equipo + '", "' + datos.anyo +'");', (error,resultado)=>{
		if (error) throw error;
		else {
			/*console.log("entro aquí 4")*/
            return callback(error,resultado);
        }
        
    });
};
const team =(datos,callback)=>{
	conexion.query('SELECT e.club, j.nombre FROM jugadores AS j INNER JOIN jugador_equipo AS jE ON (j.id_jugador = jE.id_jugador) INNER JOIN equipos AS e ON (e.id_equipo = jE.id_equipo) WHERE e.club LIKE "%"?"%" fecha_fin between "20190101" and "20190702"' ), (error,resultado)=>{

	}
}


module.exports = {historialJugador,team,};
