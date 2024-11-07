const Tareas = require('./models/tareas');
const {
        menu, 
        // crearTarea, 
        // listarTareas, 
        leerInput,
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
                tareas.crearTarea(desc, responsable);

                
                break;
            case'2':
                console.log(tareas.listadoArr);
                break;
            case'3':
                console.log('Opción no implementada'.red);
                break;
            case'4':
                console.log('Opción no implementada'.red);
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

principal()