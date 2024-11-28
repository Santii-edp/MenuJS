const Tareas = require('./models/tareas');
const {
        menu, 
        // crearTarea, 
        // listarTareas, 
        leerInput,
        leerEstado,
        pause 
    } = require('./helpers/menu')
const Table = require('cli-table3');




const principal = async () => {
    let opt = '0';
    const tareas = new Tareas();


    do {
        opt = await menu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                const responsable = await leerInput('responsable: ');
                const estado = await leerEstado();
                tareas.crearTarea(desc, responsable, estado);
                console.log('Tarea creada exitosamente!'.green);
                break;
                
            case '2': // Listar todas las tareas
                console.log('\nTodas las tareas:\n'.blue);

                mostrarTabla(tareas.listadoArr);
                break;

            case '3': // Listar tareas completadas
                console.log('\nTareas completadas:\n'.green);
                mostrarTabla(tareas.listarCompletadas());
                break;

            case '4': // Listar tareas pendientes
                console.log('\nTareas pendientes:\n'.yellow);
                mostrarTabla(tareas.listarPendientes());
                break;

            case'5':
                console.log('Opción no implementada'.red);
                break;
            case'6':
                console.log('Opción no implementada'.red);
                break;
            case '7':
                console.log('chau...'.yellow);
                break;
            default:
                break;
    
        }


        await pause();
    } while (opt !== '7');
};
const mostrarTabla = (tareas) => {
    const table = new Table({
        head: ['#', 'Descripción', 'Responsable', 'Estado'], // Encabezados
        colWidths: [5, 30, 20, 15], // Ajusta el ancho de las columnas
    });

    tareas.forEach((tarea, i) => {
        table.push([i + 1, tarea.desc, tarea.responsable, tarea.estado]);
    });

    console.log(table.toString());
};

principal()