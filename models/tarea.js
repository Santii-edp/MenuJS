const { v4: uuidv4 } = require('uuid');

class Tarea {

    id='';
    desc='';
    responsable='';
    estado= '';

    constructor(desc, responsable, estado){
        this.id = uuidv4();
        this.desc = desc;
        this.responsable = responsable;
        this.estado = estado;
    }
}

module.exports = Tarea;