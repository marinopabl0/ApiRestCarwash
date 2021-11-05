const {Schema, model} = require ('mongoose');

const TipoVehiculosSchema = Schema({
    descripcion: {
        type:String,
        required: [true, 'La descripción es obligatorio']
    },
});

module.exports = model('TipoVehiculo', TipoVehiculosSchema);