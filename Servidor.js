const app= require('./app')
const {conexion}= require('./databases/configuracion');
const dotenv=require('dotenv').config()
const conet=conexion()

const port=process.env.PORT;
app.listen(port, ()=> console.log(`se escucha en el puerto ${port}...`));