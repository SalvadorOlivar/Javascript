let numeroMagico = 20;
let numeroUsuario = parseInt(prompt("Cual es el numero magico?"));

if (numeroUsuario == numeroMagico){

  console.log("Adivinaste!!!!!!");

} else {

  while (numeroUsuario != numeroMagico) {

    if (numeroUsuario < numeroMagico) {
      console.log("El numero magico es Mayor");
  
    } else if (numeroUsuario > numeroMagico) {
      console.log("El numero magico es Menor");
    } 

    break
  } 
}
