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
	
	modelo.historial(req.body,(error, resultado)=>res.redirect('/historial'));
});
router.get('/insertaJugador',(req,res)=>{
	res.render('insertaJugador')
});

module.exports = router;
