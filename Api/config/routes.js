const router = require('express').Router();
//importo el modulo connection para usarla en el router
const conexion = require('./connection');
//asignamos las rutas







//req y res son paremetros de salida y entrada require, response

//get all
router.get('/', function (req, res) {
    let sql = 'select * from accounts';
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
});


//get individual
router.get('/:id', function (req, res) {
    const { id } = req.params;
    let sql = 'select * from accounts where login = ?';
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
});

router.post('/', function (req, res) {
    const {noticia} = req.body;
    let sql = 'consulta mysql ';
    conexion.query(sql,(err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
});




    // routes.get('/rutanumero2',function(req,res){
    //     res.send('esta es la ruta numero 2');
    // });

    //exportamos las rutas
    module.exports = router;