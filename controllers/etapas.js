const etapas = require('../models/etapas');
const {request, response}=require('express');
//const { param } = require('../routes/TipoProyecto');

const createEtapas = async (req, res) => {
    try {
      const nuevaEtapa = new etapas(req.body);
      await nuevaEtapa.save();
      console.log(nuevaEtapa)
      return res.status(201).json(nuevaEtapa)
      //res.status(201).json({ mensaje: 'Tipo de proyecto creado con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear', error });
    }
  };
  const getEtapa = async (
    req = request,res = response) => {
    try {
      //const tiposproyect = req.query;
      const etapaDB = await etapas.find();
  
      return res.json(etapaDB);
    } catch (error) {
      return res.status(500).json({
        msg: "Error general" + e,
      });
    }
  };

  const actEtapa = async (req,res ) => {
    const  {id}=req.params

    const{nombre}=req.body

    try {
      const etapaActua= await etapas.findByIdAndUpdate(
        id,{nombre},{new:true}
      )

      if(!etapaActua){
        return res.status(404).json({mensaje:'no se encontro'})
      }
      res.json(etapaActua);
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
    res.status(500).json({ mensaje: 'Error al actualizar el documento' });
      
    }
  };

  const eliminarEtapa = async (req, res) => {
    const id = req.params.id;
  
    try {
      const etapaEliminado = await etapas.findByIdAndRemove(id);
  
      if (!etapaEliminado) {
        return res.status(404).json({ mensaje: 'No se encontró el documento' });
      }
  
      res.json({ mensaje: 'El documento ha sido eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el documento:', error);
      res.status(500).json({ mensaje: 'Error al eliminar el documento' });
    }
  };

  module.exports={
    createEtapas,
    getEtapa,
    actEtapa,
    eliminarEtapa
  };

