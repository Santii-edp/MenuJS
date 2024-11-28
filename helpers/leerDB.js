const fs = require('fs');

const leerDB = () => {
    const archivo = './db/data.txt';

    if (!fs.existsSync(archivo)) {
        console.error('El archivo no existe');
        return [];
    }

    try {
        const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
        const data = JSON.parse(info);

        if (!Array.isArray(data)) {
            console.error('El formato de los datos en el archivo no es un arreglo');
            return [];
        }
        console.log('Datos leídos del archivo:', data);
        data.forEach(tarea => {
            if (!tarea.id) {
                console.warn(`Tarea sin ID encontrada: ${JSON.stringify(tarea)}`);
            } else {
                console.log(`Tarea con ID válido: ${tarea.id}`);
            }
        });

        return data; 

    } catch (error) {
        console.error('Error al leer o parsear el archivo:', error);
        return []; 
    }
};

module.exports = {
    leerDB
};
