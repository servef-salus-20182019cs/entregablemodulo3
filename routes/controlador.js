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
	modelo.nuevoRegistro(req.body,(error, resultado)=>{
		modelo.rutaNuevoRegistro(req.body,(error3, resultado3)=>{
			modelo.equiposNBA((error2, resultado2)=>{
				res.render('insertaTemporadas', { registros3: resultado3, registros2:resultado2, mensaje: 'El Jugador se inserto correctamente, añade el club al que pertenece o ha pertenecido'})
			});
		});
	});
});

router.get('/insertaTemporadas', (req, res)=>{
		modelo.jugadoresNBA((error1, resultado1)=>{
			modelo.equiposNBA((error2, resultado2)=>{
				res.render('insertaTemporadas', {registros1: resultado1, registros2:resultado2})
			});
		});
});

router.post('/insertaTemporadas', (req, res)=>{
	modelo.registroTemporadas(req.body,(error, resultado)=>res.redirect('/insertaTemporadas'));
});
router.get('/insertaLeyenda',(req,res)=>{
	res.render('inserta_retirados')
})
router.post('/insertaLeyenda', (req, res)=>{
	modelo.viejoRegistro(req.body,(error3, resultado3)=>{
		modelo.leyendasNBA(req.body, (error, resultado)=>{
			modelo.equiposNBA((error2, resultado2)=>{
				res.render('insertaTemporadas', { registros3: resultado, registros2:resultado2, mensaje: 'El Jugador retirado se inserto correctamente, añade el club al que pertenece o ha pertenecido'})
			});
		});
	});
});

module.exports = router;
