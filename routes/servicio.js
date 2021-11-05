const { Router } = require('express');
const { check } = require('express-validator');

const { ServiciosGet,ServiciosPost,ServiciosPut,ServiciosDelete } = require('../controllers/servicio')
const { existeServicioPorId} = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//Get end-point json
router.get('/',ServiciosGet);


//POST end-point json
router.post('/',[
    check('descripcion', 'La descripción es obligatorio').not().isEmpty(),
    validarCampos
], ServiciosPost);


//PUT end-point json
router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeServicioPorId),
    validarCampos
], ServiciosPut);


//DELETE end-point json 
router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeServicioPorId),
], ServiciosDelete);


module.exports = router;