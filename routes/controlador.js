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
router.post('/insertaJugador',(req,res)=>{
	/*console.log("entro1");*/
	modelo.insertaJugador(req.body,(error,resultado)=>{
		/*console.log("ENTRO3");*/
		console.log(error);
		console.log(resultado);
		res.render('insertaJugador', {mensaje: "El registro se insertó con éxito."})
	})
})

router.get('/equipos',(req,res)=>{
	res.render('plantillas');
});
router.post('equipos',(req,res)=>{
	modelo.team(req.body,(error,resultado)=>res.render('plantillas', {registros: resultado}));
});


module.exports = router;
