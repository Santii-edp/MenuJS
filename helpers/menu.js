var colors = require('colors');
var inquirer = require('inquirer');
const tareas = [];

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
    // crearTarea,
    // listarTareas,
    pause
};
