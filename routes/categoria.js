const { Router } = require('express');
const { check } = require('express-validator');

const { CategoriasGet,CategoriasPost,CategoriasPut,CategoriasDelete } = require('../controllers/categoria')
const { existeCategoriaPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//Get end-point json
router.get('/',CategoriasGet);


//POST end-point json
router.post('/',[
    check('descripcion', 'La descripción es obligatorio').not().isEmpty(),
    validarCampos
], CategoriasPost);


//PUT end-point json
router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
] ,CategoriasPut);


//DELETE end-point json 
router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
], CategoriasDelete);

module.exports = router;