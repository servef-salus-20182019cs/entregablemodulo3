const express = require('express');
var router = express.Router();
const modelo = require('../modelo/modelo');

router.get('/',(req, res)=>{
	res.render('Menu');
});
router.get('/historial', (req, res)=>{
	res.render('historial');
});

router.post('/historial', (req, res)=>{
	modelo.historialJugador(req.body,(error, resultado)=>res.render('nombreDelJugador', {registros: resultado}));
});

router.get('/plantillas', (req, res)=>{
	modelo.equiposNBA((error, resultado)=>{
		res.render('plantillas',{registros: resultado})
	});
});

router.post('/buscadorEquipo', (req, res)=>{
	modelo.plantillaNBA(req.body,(error, resultado)=> {
		if (resultado.length > 0) {
			res.render('resultadoPlantillas', {registros: resultado, mensaje: 'Nuestra base de Datos posee estos jugadores en plantilla actualmente'});
		} else {

			res.render('insertaJugador', {mensaje: 'Nuestra Base de datos no tiene registros de este Club, ingresa alguno si lo deseas'});
		}
	})	
});

router.get('/insertaJugador', (req, res)=>{
		res.render('insertaJugador')
});

router.post('/insertaJugador', (req, res)=>{
	modelo.nuevoRegistro(req.body,(error3, resultado3)=>{
		modelo.jugadoresNBA((error, resultado)=>{
			modelo.equiposNBA((error2, resultado2)=>{
				res.render('insertaTemporadas', { registros: resultado, registros1:resultado2, mensaje: 'El Jugador se inserto correctamente, añade el club al que pertenece o ha pertenecido'})
			});
		});
	});
});

router.get('/insertaTemporadas', (req, res)=>{
		modelo.jugadoresNBA((error, resultado)=>{
			modelo.equiposNBA((error2, resultado2)=>{
				res.render('insertaTemporadas', {registros: resultado, registros1:resultado2})
			});
		});
});

router.post('/insertaTemporadas', (req, res)=>{
	modelo.registroTemporadas(req.body,(error, resultado)=>res.redirect('/insertaTemporadas'));
});


module.exports = router;
