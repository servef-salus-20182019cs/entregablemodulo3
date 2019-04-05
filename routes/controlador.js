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

router.get('/insertaJugador',(req,res)=>{
	res.render('insertaJugador')
});

module.exports = router;