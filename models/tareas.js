const Tarea = require('../models/tarea');
const { guardarDB, leerDB } = require('../helpers/guardarArchivo');

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach((key) => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }
    listarCompletadas() {
        return this.listadoArr.filter(tarea => tarea.estado === 'Completada');
    }

    listarPendientes() {
        return this.listadoArr.filter(tarea => tarea.estado === 'Pendiente');
    }

    constructor() {
        const data = leerDB();
        if (data) {
            data.forEach((tarea) => {
                this._listado[tarea.id] = tarea;
            });
        }
    }

    crearTarea(desc = '', responsable = '', estado = '') {
        const tarea = new Tarea(desc, responsable, estado);
        this._listado[tarea.id] = tarea;
        this.guardarTareas();
    }

    guardarTareas() {
        guardarDB(this.listadoArr);
    }
}

module.exports = Tareas;
