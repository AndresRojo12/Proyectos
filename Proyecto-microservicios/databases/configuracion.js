const mongoose =require('mongoose');

const conexion= async()=>{

    try {
        await mongoose.connect(process.env.URI_MONGO,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Conexion correcta a la base de datos')   
     } catch (error) {

        console.log('error',error)
        throw new Error('Error al conectarse a la base de datos');
          
    }
}

module.exports={conexion}