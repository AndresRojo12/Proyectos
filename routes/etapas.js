const {Router}=require('express');
const{createEtapas,getEtapa,actEtapa,eliminarEtapa}=require('../controllers/etapas');

const router= Router();

router.post('/',createEtapas);
router.get('/',getEtapa);
router.put('/:id',actEtapa);
router.delete('/:id',eliminarEtapa);

module.exports=router;