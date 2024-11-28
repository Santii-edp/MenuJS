const { v4: uuidv4 } = require('uuid');

class Tarea {
    constructor(desc, responsable, estado = 'Pendiente') {
        this.id = require('uuid').v4(); // Asignar un id único
        this.desc = desc;
        this.responsable = responsable;
        this.estado = estado;
    }

    completar() {
        this.estado = 'Completada';
    }
}

module.exports = Tarea;


module.exports = Tarea;
