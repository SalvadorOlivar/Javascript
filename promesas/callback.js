//instalar npm install request
const request = require('request');

request('http://google.com', function(){
    console.log('Termine la peticion de Google');
});

console.log('Yo voy  despues, en el codigo de la peticion a Google.');
