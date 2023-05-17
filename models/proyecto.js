const {Schema,model}=require('mongoose');

const ProyectoSchema=Schema({
    numero: {
        type: Number,
        unique: true,
        required: true
      },
      título: {
        type: String,
        required: true
      },
      fechainiciación: {
        type: Date,
        default: new Date
      },
      fechaentrega: {
        type: Date,
        default: new Date
      },
      valor: {
        type: String,
        required: true
      },
      fechaCreacion: {
        type: Date,
        default: new Date
      },
      fechaActualizacion: {
        type: Date,
        default: new Date
      },
      cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente',
        required: true,
      },
      tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'tipoProyecto',
        required: true
      },
      universidad: {
        type: Schema.Types.ObjectId,
        ref: 'universidad',
        required: true
      },
      etapas: {
        type: Schema.Types.ObjectId,
        ref: 'etapas',
        required: true
      }
})

module.exports=model('proyecto',ProyectoSchema);