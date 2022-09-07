const router = require('express').Router();
const {create, listByUser} = require('../controllers/compra/compra');

router.post('/create', create);
router.get('/list/:id', listByUser);

module.exports = router;
