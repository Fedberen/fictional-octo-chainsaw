var pool = require('../models/db'); //Este es el llamado a la base de datos
var md5 = require('md5');

async function getUserByUsernameAndPassword (user, password) {  //Es una funcion asyncronica para decirle a node que hasta que no se aprete el boton de ingresar no se quede procesando, dando a entender de que no se sabe cuando un usuario va a ingresar
try {
  var query = "select * from usuarios where usuario = ? and password = ? limit 1";
   var rows = await pool.query(query, [user, md5(password)]);
    return rows[0]; //El 0 indica que se va a traer un solo registro, acordate que se cuenta desde el 0
   } catch (error) {
  throw error;
 }
}
module.exports = { getUserByUsernameAndPassword } //Esta parte es NECESARIA. Pongo entre corchetes todas las funciones que haya usado, separadas por una ","