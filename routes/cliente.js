const {Router}=require('express');

const{crearCliente,getTcliente,actcliente,eliminarCliente}=require('../controllers/cliente');

const router=Router();

router.post('/',crearCliente);
router.get('/',getTcliente);
router.put('/:id',actcliente);
router.delete('/:id',eliminarCliente);


module.exports=router;