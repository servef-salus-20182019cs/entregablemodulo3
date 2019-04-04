const express = require('express');
var router = express.Router();
const modelo = require('../modelo/modeloHistorial');

router.get('/',(req, res)=>{
	res.render('Menu');
});
router.get('/historial', (req, res)=>{
	res.render('historial');
});

router.post('/historial', (req, res)=>{
	
	modelo.historialJugador(req.body,(error, resultado)=>res.render('nombreDelJugador', {registros: resultado}));
});

/*router.get('/nombreDelJugador', (req, res)=>{
	modelo.historialJugador((error, resultado)=>{
		res.redirect('nombreDelJugador', {registros: resultado, mensaje: 'Aqui tiene su información:'})
	})
})*/



module.exports = router;