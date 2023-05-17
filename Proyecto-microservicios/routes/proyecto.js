const {Router}=require('express');
const{createProyecto,obtener,actualizar,eliminar}=require('../controllers/proyecto');

const router= Router();

router.post('/',createProyecto);
router.get('/',obtener);
router.put('/:id',actualizar);
router.delete('/:id',eliminar);



module.exports =router;