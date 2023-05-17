const {Router}=require('express');
const{createTipoProyecto,getTipoProyecto,actTipoProyecto,eliminarTipoProyecto}=require('../controllers/TipoProyecto');

const router= Router();

router.post('/',createTipoProyecto);
router.get('/',getTipoProyecto);
router.put('/:id',actTipoProyecto)
router.delete('/:id',eliminarTipoProyecto)
module.exports=router;