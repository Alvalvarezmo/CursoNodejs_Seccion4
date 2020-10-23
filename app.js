//Librerias
//..argv configuration
const argv = require('./config/yargs').argv;
//..colores de la consola
const colors = require('colors/safe');
//..funciones para las tablas
const { crearArchivo, listarTabla } = require(`./Multiplicar/multiplicar`); // - - const multiplicar = require(`./Multiplicar/multiplicar`);


//Definimos las variables
let comando = argv._[0]; //Si hacemos un console.log(argv) vemos que los comando seran guardados en la posicion [0] del array '_'. Solo queremos el primer comando


//Funcionalidad de la aplicacion
switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(datos => console.log(colors.green(`Tabla de multiplicar para una base ${argv.base} y un limite ${argv.limite}\n`) + colors.grey(datos)))
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite) // - - multiplicar.crearArchivo(base) / multiplicar. no es necesario si se llama a la libreria dentro de {} 
            .then(archivo => console.log("Archivo creado: " + colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}