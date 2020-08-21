// requires
// const fs = require('fs'); //propio de node
// const fs = require('express');// se instala, no nativos
// const fs = require('./pathDelArchivo'); //Archivos del proyecto

const argv = require('./config/yargs').argv
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            // .then(archivo => console.log('lista realizada'))
            // .catch(err => console.log(err))
        break

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo =>
                console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(err => console.log(err))
        break

    default:
        console.log('comando no reconocido')

}





// let argv2 = process.argv;
// console.log('base', argv.base);
// console.log('Limite', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1];