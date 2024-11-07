const { v4: uuidv4 } = require('uuid');

class Tarea {

    id='';
    desc='';
    responsable='';
    completadoEn= null;

    constructor(desc, responsable){
        this.id = uuidv4();
        this.desc = desc;
        this.responsable = responsable;
        this.completadoEn = null;
    }
}

module.exports = Tarea;