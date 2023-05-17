const {Schema,model}=require('mongoose');

const tipoProyectoSchema = new Schema({
    nombre: {
        ensayo: {
          type: String,
          required: true
        },
        articulo: {
          type: String,
          required: true
        },
        monografia: {
          type: String,
          required: true
        },
        trabajoFpregrado: {
          type: String,
          required: true
        },
        trabajoFespecializacion: {
          type: String,
          required: true
        }
      },
      fechaCreacion: {
        type: Date,
        default: new Date
      },
      fechaActualizacion: {
        type: Date,
        default: new Date
      }
})
    

module.exports=model('tipoProyecto',tipoProyectoSchema);