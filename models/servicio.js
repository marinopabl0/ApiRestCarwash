const {Schema, model} = require ('mongoose');

const ServiciosSchema = Schema({
    descripcion: {
        type:String,
        required: [true, 'La descripción es obligatorio']
    },
});

module.exports = model('Servicio', ServiciosSchema);