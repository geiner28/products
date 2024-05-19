

const express = require('express'); // Importar express
const roots = require('./Rutas');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');



const app = express(); // Crear una instancia de express
const PORT = process.env.PORT || 3000;


// Middleware para mostrar los logs de las solicitudes en consola
app.use(morgan('dev'));


// Configuración de la carpeta de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Middleware para parsear el cuerpo de las solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


roots(app); // Llamar a la función roots con la app de express como argumento

app.listen(PORT, ()=> {
    console.log('Listening  EN  port '+PORT);
});


