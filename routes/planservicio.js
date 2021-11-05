const { Router } = require('express');
const { check } = require('express-validator');

const { PlanServiciosGet,PlanServiciosPost,PlanServiciosDelete } = require('../controllers/planservicio')
const { existePlanServicioPorId, existePlanPorId, existeServicioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//Get end-point json
router.get('/',PlanServiciosGet);


//POST end-point json
router.post('/',[
    check('planid', 'El plan es obligatorio').not().isEmpty(),
    check('planid').custom(existePlanPorId),
    check('servicioid', 'El servicio es obligatorio').not().isEmpty(),
    check('servicioid').custom(existeServicioPorId),
    validarCampos
], PlanServiciosPost);


//PUT end-point json
/*router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeServicioPorId),
    validarCampos
], ServiciosPut);*/


//DELETE end-point json 
router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existePlanServicioPorId),
], PlanServiciosDelete);

module.exports = router;