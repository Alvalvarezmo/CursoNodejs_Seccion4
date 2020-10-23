//Paquetes
const fs = require('fs'); //libreria File System

//Funciones
//..crear archivo con la tabal de multiplcar
let crearArchivo = (base, limite = 10) => {

    //Promesa
    return new Promise((resolve, reject) => {

        //comprobamos que el limite y la base son numeros
        if ((!Number(base)) || !(Number(limite))) {
            reject(`El valor introducido como base ${base} o como limite ${limite} no es un numero`)
            return;
        }

        //Definimos las variables
        let data = '';

        //Creamos los datos
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        //Guardamos los datos
        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });

}

//..mostrar la tabla de multiplicar en consola con una base y un limite dados
let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        //comprobamos que el limite y la base son numeros
        if ((!Number(base)) || !(Number(limite))) {
            reject(`El valor introducido como base ${base} o como limite ${limite} no es un numero`)
            return;
        }
        //definicion de variables
        let data = '';
        //creamos los datos
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        //retornamos los datos
        resolve(data);
    });
}

//Exportar modulos
module.exports = {
    crearArchivo,
    listarTabla
}