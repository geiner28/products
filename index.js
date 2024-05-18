

const express = require('express'); // Import express
const roots = require('./Rutas');

const bodyParser = require('body-parser');
const path = require('path');



const app = express(); // Create an express app
const PORT = 3000; // Set the port

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Middleware para parsear el cuerpo de las solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


roots(app); // Call the function roots and pass the app as an argument

app.listen(PORT, ()=> {
    console.log('Listening  EN  port '+PORT);
});


