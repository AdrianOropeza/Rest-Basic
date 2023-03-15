const { response, request } = require('express');

const GETusuarios = ( req = request, res = response) => {

    const { nombre, edad } = req.query;

    res.json({
        msg: "Get API - controller",
        nombre, 
        edad
    });
};

const POSTusuarios = ( req, res = response) => {
    res.status(201).json({
        msg: "Post API - controller"
    });
};

const PUTusuarios = ( req, res = response ) => {

    const { id } = req.params.id;

    res.json({
        msg: "Put API - controller",
        id
    });
};

const DELETEusuarios = ( req, res = response) => {
    res.json({
        msg: "Delete API - controller"
    });
}

module.exports = {
    GETusuarios,
    POSTusuarios,
    PUTusuarios,
    DELETEusuarios
}