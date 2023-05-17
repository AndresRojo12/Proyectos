const TipoProyecto = require('../models/TipoProyecto');
const {request, response}=require('express');
//const { param } = require('../routes/TipoProyecto');

const createTipoProyecto = async (req, res) => {
    try {
      const nuevoTipoProyecto = new TipoProyecto(req.body);
      await nuevoTipoProyecto.save();
      console.log(nuevoTipoProyecto)
      return res.status(201).json(nuevoTipoProyecto)
      //res.status(201).json({ mensaje: 'Tipo de proyecto creado con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear el tipo de proyecto', error });
    }
  };
  const getTipoProyecto = async (
    req = request,
  
    res = response
  ) => {
    try {
      //const tiposproyect = req.query;
      const tipoproyectoDB = await TipoProyecto.find();
  
      return res.json(tipoproyectoDB);
    } catch (error) {
      return res.status(500).json({
        msg: "Error general" + e,
      });
    }
  };

  const actTipoProyecto = async (req,res ) => {
    const  {id}=req.params

    const{nombre}=req.body

    try {
      const tipProyectActua= await TipoProyecto.findByIdAndUpdate(
        id,{nombre},{new:true}
      )

      if(!tipProyectActua){
        return res.status(404).json({mensaje:'no se encontro'})
      }
      res.json(tipProyectActua);
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
    res.status(500).json({ mensaje: 'Error al actualizar el documento' });
      
    }
  };

  const eliminarTipoProyecto = async (req, res) => {
    const id = req.params.id;
  
    try {
      const tipoProyectoEliminado = await TipoProyecto.findByIdAndRemove(id);
  
      if (!tipoProyectoEliminado) {
        return res.status(404).json({ mensaje: 'No se encontró el documento' });
      }
  
      res.json({ mensaje: 'El documento ha sido eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el documento:', error);
      res.status(500).json({ mensaje: 'Error al eliminar el documento' });
    }
  };

  module.exports={
    createTipoProyecto,
    getTipoProyecto,
    actTipoProyecto,
    eliminarTipoProyecto
  };

