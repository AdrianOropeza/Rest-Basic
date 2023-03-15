
const { Router } = require('express');
const { GETusuarios, POSTusuarios, PUTusuarios, DELETEusuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', GETusuarios);

router.post('/', POSTusuarios);

router.put('/:id', PUTusuarios);

router.delete('/', DELETEusuarios);

module.exports = router;
