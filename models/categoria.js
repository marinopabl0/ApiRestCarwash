const {Schema, model} = require ('mongoose');

const CategoriasSchema = Schema({
    descripcion: {
        type:String,
        required: [true, 'La descripción es obligatorio']
    },
});

module.exports = model('Categoria', CategoriasSchema);