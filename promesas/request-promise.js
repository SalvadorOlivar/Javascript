//instalar npm install request-promise
const rp = require('request-promise');

rp('http://google.com')
  .then(function(html){
      console.log('Termine la peticion de Google');
  }).catch(function(err){
      console.log(err);
  })
