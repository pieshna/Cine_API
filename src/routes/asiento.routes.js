const router = require('express').Router();
const {listByMovie, update, updateToAvailable} = require('../controllers/cartelera/asientos');

router.get('/list/:id', listByMovie);
router.put('/update/:id', update);
router.put('/updatea/:id', updateToAvailable);

module.exports = router;
