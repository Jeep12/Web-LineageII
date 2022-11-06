require('./config/connection');


const express = require('express');
//pide port pide el puerto y si existe usa el 3000, process era algo de node.js que esta en el tutorial viejo 
const port = (process.env.port || 3000);


//creo la app en express
const app = express();
//seteo el puerto hecho anteriormente 'port'
app.set('port',port);

//declaro las rutas en un archivo aparte 'routes.js' y las importo aca asi es mas comodo
app.use('/api',require('./config/routes'));


//iniciar express

app.listen(app.get('port'),error =>{
    if(error){
        console.log("Error en express");
    }else {
        console.log("Express corre correctamente en el puerto " + port);
    }
})
