const router = require('express').Router();
const { create, list, update, remove,listById } = require('../controllers/cartelera/listar');

router.post('/create', create);
router.get('/list', list);
router.put('/update/:id', update);
router.delete('/delete/:id', remove);
router.get('/list/:id', listById);

module.exports = router;