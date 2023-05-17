const universidad=require('../models/universidad')
const {request, response}=require('express');

const crearUniversidad= async(req, res)=>{
    try {
        const nuevaUniversidad= new universidad(req.body);
        await nuevaUniversidad.save();
        console.log(nuevaUniversidad);
        return res.status(201).json(nuevaUniversidad);
    } catch (error) {
        res.status(500).json({mensaje: 'Error al crear', error});
    }
};

const getUniversidad = async (
    req = request,
  
    res = response
  ) => {
    try {
      const universidadDB = await universidad.find();
  
      return res.json(universidadDB);
    } catch (error) {
      return res.status(500).json({
        msg: "Error general" + e,
      });
    }
  };

  const actUniversidad = async (req,res ) => {
    const  {id}=req.params

    const univer=req.body
    try {
      const uni= await universidad.findByIdAndUpdate(
        id,univer,{new:true}
      )

      if(!uni){
        return res.status(404).json({mensaje:'no se encontro'})
      }
      res.json(uni);
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
    res.status(500).json({ mensaje: 'Error al actualizar el documento' });
      
    }
  };

  const eliminarUniversidad = async (req, res) => {
    const id = req.params.id;
  
    try {
      const uniEliminada = await universidad.findByIdAndRemove(id);
  
      if (!uniEliminada) {
        return res.status(404).json({ mensaje: 'No se encontró el documento' });
      }
  
      res.json({ mensaje: 'El documento ha sido eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el documento:', error);
      res.status(500).json({ mensaje: 'Error al eliminar el documento' });
    }
  };

module.exports={
   crearUniversidad,
    getUniversidad,
    actUniversidad,
    eliminarUniversidad
}
