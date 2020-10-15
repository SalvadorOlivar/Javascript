function asincrono(){
    return new Promise(function(resolve,reject){
        resolve('Todo salio bien');

        reject(new Error('No se pudo completar'));
    });
}