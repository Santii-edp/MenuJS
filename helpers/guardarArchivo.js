const fs = require('fs');

const guardarDB = ( data ) => {

    const archivo = './db/data.txt'

    fs.writeFileSync(archivo, JSON.stringify(data, null, 2));


}

const leerDB = () => {
    const archivo = './db/data.txt';
    if (!fs.existsSync(archivo)) {
        return null;
    }
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    return JSON.parse(info);
};

module.exports = {
    guardarDB,
    leerDB
};
