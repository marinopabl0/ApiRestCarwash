const { Router } = require('express');
const { check } = require('express-validator');

const { TipoVehiculosGet,TipoVehiculosPost,TipoVehiculosPut,TipoVehiculosDelete } = require('../controllers/tipovehiculo')
const { existeTipoVehiculoPorId} = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//Get end-point json
router.get('/',TipoVehiculosGet);


//POST end-point json
router.post('/',[
    check('descripcion', 'La descripción es obligatorio').not().isEmpty(),
    validarCampos
], TipoVehiculosPost);


//PUT end-point json
router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeTipoVehiculoPorId),
    validarCampos
] ,TipoVehiculosPut);


//DELETE end-point json 
router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeTipoVehiculoPorId),
], TipoVehiculosDelete);


module.exports = router;