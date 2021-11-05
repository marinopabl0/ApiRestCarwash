const {Schema, model} = require ('mongoose');

const PlanServiciosSchema = Schema({
    planid: {
        type:String,
        required: [true, 'El plan es obligatorio']
    },
    servicioid: {
        type:String,
        required: [true, 'El servicio es obligatorio']
    }
});

module.exports = model('PlanServicio', PlanServiciosSchema);