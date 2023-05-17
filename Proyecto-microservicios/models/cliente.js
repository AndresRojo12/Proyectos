const {Schema,model}=require('mongoose');

const clienteSchema=Schema({
    nombre:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    fechaCreacion:{
        type: Date,
        default:new Date()
    },

    fechaActualizacion:{
        type:Date,
        default:new Date()
    }
})

module.exports=model('cliente',clienteSchema);