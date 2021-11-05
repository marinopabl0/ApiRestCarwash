const { Router } = require('express');
const { check } = require('express-validator');

const { PlanesGet,PlanesPost,PlanesPut,PlanesDelete } = require('../controllers/plan')
const { existePlanPorId, existeServicioPorId, existeCategoriaPorId, existeTipoVehiculoPorId} = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//Get end-point json
router.get('/',PlanesGet);


//POST end-point json
router.post('/',[
    check('descripcion', 'La descripción es obligatorio').not().isEmpty(),
    check('precio', 'El precio es obligatorio').not().isEmpty(),
    check('precio','El precio debe ser número').isFloat(),
    check('categoriaid').custom(existeCategoriaPorId),
    check('tipovehiculoid').custom(existeTipoVehiculoPorId),
    validarCampos
], PlanesPost);


//PUT end-point json
router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existePlanPorId),
    check('categoriaid').custom(existeCategoriaPorId),
    check('tipovehiculoid').custom(existeTipoVehiculoPorId),
    validarCampos
], PlanesPut);


//DELETE end-point json 
router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existePlanPorId),
], PlanesDelete);

//Falta validar si existe el ID en la colección detalleServicios, si existe no borrar

module.exports = router;