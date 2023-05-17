const {Schema,model}=require('mongoose');

const etapasSchema=Schema({
    nombre:{
        anteproyecto:{
            type:String,
            required:true
        },

        entregaparcial1:{
            type:String,
            required:true
        }, 
        
        entregaparcial2:{
            type:String,
            required:true
        }, 
        
         entregafinal:{
            type:String,
            required:true
         }
    },

    fechaCreacion:{
        type:Date,
        default:new Date
    },

    fechaActualizacion:{
        type:Date,
        default:new Date
    }
})

module.exports=model('etapas',etapasSchema);