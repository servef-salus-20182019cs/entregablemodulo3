const mysql = require('mysql');

const config = {
    host: 'wm1709.com',
    user: 'c21_wm1709',
    password: '87LHAVBf19tqa',
    database: 'c21_wm1709',
};

const conexion = mysql.createConnection(config);

conexion.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

module.exports = conexion;