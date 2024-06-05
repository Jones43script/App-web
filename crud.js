const conexion = require('../database/db');
exports.save = (req, res)=>{
    const NOMBRE = req.body.NOMBRE;
    const APELLIDO = req.body.APELLIDO;
    const DOCUMENTO = req.body.DOCUMENTO;
    const ESPECIALIDAD = req.body.ESPECIALIDAD;

    conexion.query('INSERT INTO users SET ?',{NOMBRE:NOMBRE, APELLIDO:APELLIDO, DOCUMENTO:DOCUMENTO, ESPECIALIDAD:ESPECIALIDAD}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const NOMBRE = req.body.NOMBRE;
    const APELLIDO = req.body.APELLIDO;
    const DOCUMENTO = req.body.DOCUMENTO;
    const ESPECIALIDAD = req.body.ESPECIALIDAD;

    conexion.query('UPDATE users SET ? WHERE id = ?',[{NOMBRE:NOMBRE, APELLIDO:APELLIDO, DOCUMENTO:DOCUMENTO, ESPECIALIDAD:ESPECIALIDAD}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};
