const {menu, pause } = require('./models/menu')


const principal =async() =>{
    let opt = '0';

    do{
        opt = await menu()
        await pause() 
    } while( opt !== '5')
}

principal()