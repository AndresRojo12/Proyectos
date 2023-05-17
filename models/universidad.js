const {Schema,model}=require('mongoose');

const universidadSchema=Schema({
    nombre:{
        type:String,
        required:true
    },

    direccion:{
        type:String,
        required:true
    },

    telefono:{
        type:Number,
        required:true
    },

    fechaCreacion:{
        type:Date,
        default:new Date
    },

    fechaActualizacion:{
        type:Date,
        default: new Date
    }
})

module.exports=model('universidad',universidadSchema);