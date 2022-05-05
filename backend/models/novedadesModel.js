var pool = require('../models/db'); //Este es el llamado a la base de datos

async function getNovedades() {  //Es una funcion asyncronica para decirle a node que hasta que no se aprete el boton de ingresar no se quede procesando, dando a entender de que no se sabe cuando un usuario va a ingresar
    var query = "select * from novedades";
    var rows = await pool.query(query);
    return rows; //El 0 indica que se va a traer un solo registro, acordate que se cuenta desde el 0
}

async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadById(id) {
    var query = "delete from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}

//Aca primero tenemos para traer la novedad por id y despues para modificarla

async function getNovedadById(id) {
    var query = "select * from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}
async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getNovedades, insertNovedad, deleteNovedadById, getNovedadById, modificarNovedadById } //Esta parte es NECESARIA. Pongo entre corchetes todas las funciones que haya usado, separadas por una ","