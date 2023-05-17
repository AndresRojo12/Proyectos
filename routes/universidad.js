const {Router}=require('express');

const{crearUniversidad,getUniversidad,actUniversidad,eliminarUniversidad}=require('../controllers/universidad');

const router=Router();

router.post('/',crearUniversidad);
router.get('/',getUniversidad);
router.put('/:id',actUniversidad);
router.delete('/:id',eliminarUniversidad);


module.exports=router;