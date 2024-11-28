const Tarea = require('../models/tarea');
const { guardarDB } = require('../helpers/guardarArchivo');
const {leerDB} = require ('../helpers/leerDB')


class Tareas {
    _listado = {};

    get listadoArr() {
        return Object.values(this._listado);
    }

    constructor() {
        const data = leerDB();
        if (data) {
            data.forEach((tarea) => {
                this._listado[tarea.id] = new Tarea(tarea.desc, tarea.responsable, tarea.estado);
                this._listado[tarea.id].id = tarea.id; 
            });
        }
    }

    crearTarea(desc = '', responsable = '', estado = 'Pendiente') {
        const tarea = new Tarea(desc, responsable, estado);
        this._listado[tarea.id] = tarea;
        this.guardarTareas();
    }
    guardarTareas() {
        const data = this.listadoArr.map(({ id, desc, responsable, estado }) => ({
            id,
            desc,
            responsable,
            estado
        }));
        guardarDB(data);
    }
    
    completarTareas(id = []) {
        id.forEach((id) => {
            const tarea = this._listado[id];
            if (tarea) {
                if (tarea.estado === 'Pendiente') {
                    tarea.estado = 'Completada'; 
                    console.log(`Tarea completada: ${tarea.desc} con ID: ${tarea.id}`);
                } else {
                    console.log(`La tarea con ID: ${id} ya está completada.`);
                }
            } else {
                console.log(`No se encontró una tarea con ID: ${id}.`);
            }
        });
            this.guardarTareas();
    }
    
    
    
    

    listarCompletadas() {
        return this.listadoArr.filter((tarea) => tarea.estado === 'Completada');
    }

    listarPendientes() {
        return this.listadoArr.filter((tarea) => tarea.estado === 'Pendiente');
    }
}

module.exports = Tareas;

