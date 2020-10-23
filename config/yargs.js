//Definicion de parametros
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//Libreiras
//..libreria para introducir parametros desde la linea de comandos
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo de texto con los calculos de la base seleccionada', opts)
    .help()
    .argv;

//Exportar
module.exports = {
    argv
}