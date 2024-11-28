const Tareas = require('./models/tareas');
const {
        menu, 
        // crearTarea, 
        // listarTareas, 
        mostrarTabla,
        leerInput,
        leerEstado,
        seleccionarTareasPendientes,
        pause 
    } = require('./helpers/menu')




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
                
            case '2': 
                console.log('\nTodas las tareas:\n'.blue);

                mostrarTabla(tareas.listadoArr);
                break;

            case '3': 
                console.log('\nTareas completadas:\n'.green);
                mostrarTabla(tareas.listarCompletadas());
                break;

            case '4': 
                console.log('\nTareas pendientes:\n'.yellow);
                mostrarTabla(tareas.listarPendientes());
                break;
            case '5': // Completar tareas pendientes
                const tareasPendientes = tareas.listadoArr.filter((t) => t.estado === 'Pendiente');
                if (tareasPendientes.length === 0) {
                    console.log('\nNo hay tareas pendientes para completar.\n'.yellow);
                } else {
                    const id = await seleccionarTareasPendientes(tareasPendientes); // Asegúrate de que id es un array
                    tareas.completarTareas([id]); // Pasa un array con el ID de la tarea seleccionada
                    console.log('\nTareas completadas exitosamente!\n'.green);
                }
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

principal()