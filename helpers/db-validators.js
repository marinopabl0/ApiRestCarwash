const Category = require('../models/categoria');
const Servicio = require('../models/servicio');
const TipoVehiculo = require('../models/tipovehiculo');
const Plan = require('../models/plan');
const PlanServicio = require('../models/planservicio');

const existeCategoriaPorId = async( id ) => {
    const existeCategoria = await Category.findById(id);

    if(!existeCategoria){
        throw new Error(`Error - El id de categoría: ${id} no se encuentra en la DB`);
    }
}


const existeServicioPorId = async( id ) => {
    const existeServicio = await Servicio.findById(id);

    if(!existeServicio){
        throw new Error(`Error - El id de servicio: ${id} no se encuentra en la DB`);
    }
}

const existeTipoVehiculoPorId = async( id ) => {
    const existeTipoVehiculo = await TipoVehiculo.findById(id);

    if(!existeTipoVehiculo){
        throw new Error(`Error - El id de tipo vehiculo: ${id} no se encuentra en la DB`);
    }
}

const existePlanServicioPorId = async( id ) => {
    const existePlanServicio = await PlanServicio.findById(id);

    if(!existePlanServicio){
        throw new Error(`Error - El id de plan servicio: ${id} no se encuentra en la DB`);
    }
}

const existePlanPorId = async( id ) => {
    const existePlan = await Plan.findById(id);

    if(!existePlan){
        throw new Error(`Error - El id de plan: ${id} no se encuentra en la DB`);
    }
}

module.exports = {existePlanPorId, existeCategoriaPorId, existeServicioPorId, existeTipoVehiculoPorId, existePlanServicioPorId};