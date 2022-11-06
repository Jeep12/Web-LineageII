const mysql = require("mysql");
// tengo que user require porque sino no aparecen los metodos de la importacion
let conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port:3306,
    database:"l2jmobiusclassic"
});

conexion.connect(err =>{
    if (err){
        console.log("conexion faliida");
    }else {
        console.log("conexion exitosa");
    }

});
//exporto esta conexion para usarla mas tarde
module.exports=conexion;

