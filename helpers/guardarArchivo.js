const fs = require('fs');

// Helper para guardar y leer el archivo
const guardarDB = (data) => {
    const archivo = './db/data.txt';
    fs.writeFileSync(archivo, JSON.stringify(data, null, 2));
};


module.exports = {
    guardarDB
};
