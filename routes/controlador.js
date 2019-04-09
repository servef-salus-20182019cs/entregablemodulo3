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

router.get('/insertaJugador', (req, res)=>{
		res.render('insertaJugador')
});

router.post('/insertaJugador', (req, res)=>{
	modelo.nuevoRegistro(req.body,(error, resultado)=>
		res.render('insertaJugador', { mensaje: 'El Jugador se inserto correctamente'}));
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
