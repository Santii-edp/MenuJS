var colors = require('colors');
var inquirer = require('inquirer');
const tareas = [];
const Table = require('cli-table3');

const questions = {
    type: 'list',
    name: 'options',
    message: 'Escoge la opción de tu preferencia',
    choices: [
        {
            value: '1',
            name: `${'1.'.red} Crear tarea`,
        },
        {
            value: '2',
            name: `${'2.'.red} Listar tareas`,
        },
        {
            value: '3',
            name: `${'3.'.red} Listar tareas completas`,
        },
        {
            value: '4',
            name: `${'4.'.red} Listar tareas pendientes`,
        },
        {
            value: '5',
            name: `${'5.'.red} Completar tarea(s)`,
        },
        {
            value: '6',
            name: `${'6.'.red} Borrar tarea`,
        },
        {
            value: '7',
            name: `${'7.'.red} Salir`,
        }
    ]
};

const menu = async () => {
    console.clear();
    console.log('============================================='.blue);
    console.log('=            Bienvenido al menú :D          ='.yellow);
    console.log('============================================='.blue);

    const { options } = await inquirer.default.prompt(questions);
    return options;
};

const leerInput = async (message)=> {

    const question =[
        {
            type:'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'porfavor ingresar un valor'
                }
                return true;
            }
        }
    ]

    const {desc} = await inquirer.default.prompt(question);
    return desc;
};
const leerEstado = async ()=> {

    const seleccionarEstado =[
        {
            type:'list',
            name: 'estado',
            message:'seleccione el estado de la tarea',
            choices:[
                {
                    value: 'Completada',
                    name: `${'1.'.green}${'Completada'.green}`,
                },
                {
                    value: 'Pendiente',
                    name: `${'2.'.red}${'Pendiente'.yellow}`,
                },
            ],
            validate(value){
                if(value.length === 0){
                    return 'porfavor ingresar un valor'
                }
                return true;
            }
        }
    ]

    const { estado } = await inquirer.default.prompt(seleccionarEstado);
    return estado;
};

// const crearTarea = async () => {
//     const { tarea } = await inquirer.default.prompt([
//         {
//             type: 'input',
//             name: 'tarea',
//             message: 'Ingresa la descripción de la tarea:'
//         }
        
//     ]);
//     const { responsable } = await inquirer.default.prompt([
//         {
//             type: 'input',
//             name: 'responsable',
//             message: 'Ingresa el nombre del responsable de la tarea:'
//         }
        
//     ]);
//     tareas.push({ id: tareas.length + 1, responsable: responsable, description: tarea });
//     console.log('Tarea creada exitosamente!'.green);
// };


// const listarTareas = () => {
//     console.log('\nTareas:');
//     tareas.forEach((tarea, index) => {
//         console.log(`${(index + 1).toString().green}. ${tarea.description}. responsable:${tarea.responsable}`);
//     });
// };

const seleccionarTareasPendientes = async (tareasPendientes) => {
    const choices = tareasPendientes.map((tarea, i) => ({
        value: tarea.id,
        name: `${(i + 1).toString().green}. ${tarea.desc} (${tarea.responsable})`,
    }));

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione las tareas a completar:',
            choices,
        },
    ];

    const { ids } = await inquirer.default.prompt(preguntas);
    return ids;
};
const mostrarTabla = (tareas) => {
    const table = new Table({
        head: ['#', 'Descripción', 'Responsable', 'Estado'],
        colWidths: [5, 30, 20, 15]
    });

    tareas.forEach((tarea, i) => {
        table.push([i + 1, tarea.desc, tarea.responsable, tarea.estado]);
    });

    console.log(table.toString());
};
const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione la tecla ${'enter'.green} para continuar`
        }
    ];
    await inquirer.default.prompt(question);
};

module.exports = {
    menu,
    leerInput,
    leerEstado,
    seleccionarTareasPendientes,
    mostrarTabla,
    // crearTarea,
    // listarTareas,
    pause
};
