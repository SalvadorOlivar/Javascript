let numeroMagico = 20;
let numeroUsuario = parseInt(prompt("Cual es el numero magico?"));

if (numeroMagico !== numeroUsuario) {
  console.log("Intenta denuevo!")
  while (numeroMagico !== numeroUsuario) {
    
    let nuevoNumeroUsuario = parseInt(prompt("Cual es el numero magico?"));

    if (numeroMagico == nuevoNumeroUsuario) {
      console.log("adivinaste")

    } else if(numeroMagico < nuevoNumeroUsuario ) {
      console.log("el numero magico es menor")

    } else if(numeroMagico > nuevoNumeroUsuario){
      console.log("el numero magico es mayor")

    }
     numeroUsuario = nuevoNumeroUsuario
  }
} else if (numeroMagico == numeroUsuario){
  console.log("adivinaste");
}
