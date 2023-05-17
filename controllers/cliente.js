const cliente=require('../models/cliente')
const {request, response}=require('express');

const crearCliente= async(req, res)=>{
    try {
        const nuevoCliente= new cliente(req.body);
        await nuevoCliente.save();
        console.log(nuevoCliente);
        return res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(500).json({mensaje: 'Error al crea el cliente', error});
    }
};

const getTcliente = async (
    req = request,
  
    res = response
  ) => {
    try {
      //const tiposproyect = req.query;
      const clienteDB = await cliente.find();
  
      return res.json(clienteDB);
    } catch (error) {
      return res.status(500).json({
        msg: "Error general" + e,
      });
    }
  };

  const actcliente = async (req,res ) => {
    const  {id}=req.params

    const clients=req.body

    try {
      const client= await cliente.findByIdAndUpdate(
        id,clients,{new:true}
      )

      if(!client){
        return res.status(404).json({mensaje:'no se encontro'})
      }
      res.json(client);
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
    res.status(500).json({ mensaje: 'Error al actualizar el documento' });
      
    }
  };

  const eliminarCliente = async (req, res) => {
    const id = req.params.id;
  
    try {
      const clienteEliminado = await cliente.findByIdAndRemove(id);
  
      if (!clienteEliminado) {
        return res.status(404).json({ mensaje: 'No se encontró el documento' });
      }
  
      res.json({ mensaje: 'El documento ha sido eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el documento:', error);
      res.status(500).json({ mensaje: 'Error al eliminar el documento' });
    }
  };

module.exports={
    crearCliente,
    getTcliente,
    actcliente,
    eliminarCliente
}
