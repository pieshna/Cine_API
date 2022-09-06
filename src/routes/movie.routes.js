const router = require('express').Router();
const { create, list, update, remove } = require('../controllers/cartelera/listar');

router.post('/create', create);
router.get('/list', list);
router.put('/update/:id', update);
router.delete('/delete/:id', remove);

module.exports = router;