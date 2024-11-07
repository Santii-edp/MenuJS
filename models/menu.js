var colors = require('colors');
var inquirer = require('inquirer');

const questions = {
    type: 'list',
    name: 'options',
    message: 'Escoge la opción de tu preferencia',
    choices: [
        {
            value: '1',
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. Editar tarea'
        },
        {
            value: '3',
            name: '3. Eliminar tarea'
        },
        {
            value: '4',
            name: '4. Listar tareas'
        },
        {
            value: '5',
            name: '5. Salir'
        }
    ]
};

const menu = async () => {
    console.clear();
    console.log('==========================================='.blue);
    console.log('=            Bienvenido al menú           ='.yellow);
    console.log('==========================================='.blue);

    const { options } = await inquirer.default.prompt(questions);
    return options;
};

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione la tecla ${'enter'.green} para continuar`
        }
    ];
    await inquirer.prompt(question);
};

module.exports = {
    menu,
    pause
};
