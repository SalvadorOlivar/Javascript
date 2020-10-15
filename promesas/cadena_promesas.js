function calcular(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,400,5);
    })
}

function segundoCalculo(numero){
    console.log(numero);
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,600,'segunda promesa');
    })
}

calcular().then(segundoCalculo).then(console.log);