const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
// en la solucion del paso a paso esta como readlineSync.question esto es erroneo...
// debe obtenerse un entero no un string, ya que se compara con 2 enteros porque sino la comparaciones fallan en verificarAdivinanza
// y se produce un bucle infinito en el ciclo while.
    return readlineSync.questionInt('Ingresa un número: ');
};


const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;
    
    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100. \n');

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};


juegoAdivinanza();

