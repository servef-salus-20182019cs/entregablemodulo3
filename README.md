# entregablemodulo3
Las tecnologias usadas para el proyecto han sido:
  -JavaScript.
  -HTML.
  -CSS.
  -Mysql.
  -PUG(como gestor de plantillas)
  -Express(como esqueleto del Proyecto)
  -El plugin de oveerride

Nuestro Proyecto se basara en un Menu sobre los Clubs y Jugadores de la NBA, el menu sera el siguiente:
- Historial (Creado por Ivan Salgado(topeivan59).
  Al acceder a localhost:3000/historial, saldra un buscador en el que poner un jugador ya existente en nuestra base de datos para que     aparezcan sus equipos anteriores al igual que el actual ordenados por su fecha de inicio de contrato.
- Equipos (Creado por Alejandro Martinez(kamesi16).
  Accederemos mediante localhost:3000/plantillas donde podremos ver la informacion de los jugadores actuales de cada equipo               seleccionados por el ultimo año de fin de contrato. 
  Si el equipo no tiene registro de jugadores actuales, tendremos la opcion mediante una redireccion de poder insertar un nuevo Jugador   a la base de Datos (redirecciona a Inserta Jugador).
  Despues de insertar un nuevo jugador, tendremos la posibilidad con una redireccion tambien de poder insertar las temporadas que ha       pertenecido a un club, ya sean clubs anteriores o el club en el que milita actualmente.
  
- Inserta_jugador (Creado por Alejandro Martinez(kamesi16).
  Accederemos mediante localhost:3000/insertaJugador donde podremos insertar nuevos jugadores a nuestra base de Datos.
  
- Insertar_Historial (Creado por Alejandro Martinez(kamesi16).
  Accederemos mediante localhost:3000/insertaTemporadas donde podremos insertar los clubs al que a pertenecido un jugador durante un       periodo de tiempo, ya sea jugando actualmente o con anterioridad, en dicho club.

El reparto del trabajo fue de la siguente manera : 
  -Creación de la base de datos fue realizada por Carlos Soler(carlossoleroig) y Alejandro Martinez(kamesi16) desde el la base de datos    de mysql ubicada con el dominio wm1709.com/phpmyadmin.
  -La confección y elaboración del archivo de estilo fue una idea del equipo en conjunto.
  -La creación del archivo "README.md" fue realizado de forma conjunta por el equipo.
  -La confección y elaboración del archivo de controlador y modelo fue elaborado en conjunto, simultaneamente.
  -La creación del esqueleto con express fue subido por Ivan Salgado(topeivan59).

La busqueda de informacion fue obtenida en:
-https://es.nba.com/
-https://es.wikipedia.org/wiki/Wikipedia:Portada
-Revista NBA.
