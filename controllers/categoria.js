const { response, request } = require('express');

const Categoria = require('../models/categoria');

//GET
const CategoriasGet = async (req = request, res = response) => {
    try {

        const categorias = await Categoria.find();

        res.json({
            categorias
        })
    }
    catch(error){
    }
}


//POST
const CategoriasPost = async (req = request, res = response) => {
    try{

        const { descripcion } = req.body;
        const categoria = new Categoria({descripcion});

        await categoria.save();

        res.json({
            categoria 
        })
    }
    catch(error){
    }
}


//PUT
const CategoriasPut = async (req = request, res = response) => {
    try{

        const { id } = req.params;
        const {_id, ...resto} = req.body;

        const categoria = await Categoria.findByIdAndUpdate(id, resto);

        res.json(categoria);
    }
    catch(error){
    }
}


//DELETE
const CategoriasDelete = async (req = request, res = response) => {
    try{

        const { id } = req.params;

        const categoria = await Categoria.findByIdAndDelete(id);

        res.json({
            id
        })
    }
    catch(error){
    }
}

module.exports = {
    CategoriasGet,
    CategoriasPost,
    CategoriasPut,
    CategoriasDelete
}