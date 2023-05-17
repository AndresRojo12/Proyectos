const Proyecto = require('../models/proyecto');
const {request, response}=require('express');
const Cliente= require('../models/cliente');
const Etapas= require('../models/etapas');
const TipoProyecto=require('../models/TipoProyecto');
const Universidad=require('../models/universidad');
const proyecto = require('../models/proyecto');
//const { populate } = require('../models/proyecto');
//const proyecto = require('../models/proyecto');

const createProyecto = async (req, res) => {
    try {
      const {numero, título, fechainiciacion, fechaentrega, valor, cliente, tipoProyecto, universidad, etapas} =req.body;
      const existeClient=await Cliente.findById(cliente);
      if(!existeClient){
        return res.status(400).json({mensaje:'El cliente no existe'});
      }

      //validacion de tipo proyecto

      const existeTipoProyecto=await TipoProyecto.findById(tipoProyecto);
      if(!existeTipoProyecto){
        return res.status(400).json({mensaje:'Tipo de proyecto no existe'});
      }

      // validar universidad

      const existeUniversidad=await Universidad.findById(universidad);
      if(!existeUniversidad){
        return res.status(400).json({mensaje:'Universidad no existe'});
      }

      // validar etapas

      const existeEtapa= await Etapas.findById(etapas);
      if(!existeEtapa){
        return res.status(400).json({mensaje:'No existe etapa'});
      }

      // creacion de proyecto

      const nuevoproyect=new proyecto({
        numero,
        título,
        fechainiciacion,
        fechaentrega,
        valor,
        cliente,
        tipoProyecto,
        universidad,
        etapas
      });

      // guardar el proyecto

      await nuevoproyect.save();
      res.status(201).json({ mensaje:'se creo correctamente',nuevoproyect});
    } catch (error) {
      console.error();
      res.status(500).json({ mensaje: 'Error al crear', error });
    }
  };

  //listar

  const obtener= async(req,res)=>{
    try {
      const proyectos= await Proyecto.find()
     .populate({
      path: 'numero cliente',
        select: 'nombre email'
     })
     .populate({
      path:'tipoProyecto',
      select:'nombre ensayo '
     })
     .populate({
      path:'universidad',
      select:'nombre direccion telefono'
     })
     .populate({
      path:'etapas',
      select:'nombre'
     })

      res.status(200).json(proyectos);
    } catch (error) {
      res.status(500).json({mensaje: 'error al obtener proyectos',error:error});
    }
  };

  const actualizar=async(req,res)=>{
    try {
      const { id } = req.params; // ID del proyecto a actualizar
      const {título , fechainiciacion, fechaentrega, valor, cliente, tipoProyecto, universidad, etapas } = req.body; // Datos actualizados
      // Validar que el campo título no esté vacío
      if (!título) {
        return res.status(400).json({ mensaje: 'El campo título es obligatorio' });
      }
      // Buscar y actualizar el proyecto en la base de datos
      const proyectoActualizado = await Proyecto.findByIdAndUpdate(id, {
        título,
        fechainiciacion,
        fechaentrega,
        valor,
        cliente,
        tipoProyecto,
        universidad,
        etapas
      }, { new: true }); // Con { new: true } se devuelve el proyecto actualizado en lugar del proyecto antiguo
      // Enviar una respuesta con el proyecto actualizado
      res.status(200).json({ mensaje: 'Proyecto actualizado correctamente', proyecto: proyectoActualizado });
    } catch (error) {
      console.error(error);
      res.status(400).json({ mensaje: 'Error al actualizar el proyecto', error });
    }
  };

  const eliminar= async(req, res)=>{
    const id = req.params.id
    try {
      const proyecEli=await Proyecto.findByIdAndDelete(id);

      if(!proyecEli){
       return res.status(404).json({mensaje: 'no se encontro'})
      }

      res.json({mensaje:'se elimino'})
    } catch (error) {
      console.error(error);
      res.status(500).json({mensaje:'error'})
    }
  };

  module.exports={
    createProyecto,
    obtener,
    actualizar,
    eliminar
  }