const {Schema, model} = require ('mongoose');

const PlanesSchema = Schema({
    descripcion: {
        type:String,
        required: [true, 'La descripción es obligatorio']
    },
    precio: {
        type:Number,
        required: [true, 'El precio es obligatorio']
    },
    categoriaid: {
        type: String,
        required: [true, 'La categoría es obligatorio']
    },
    tipovehiculoid: {
        type: String,
        required: [true, 'El tipo vehiculo es obligatorio']
    }
});

module.exports = model('Plan', PlanesSchema);