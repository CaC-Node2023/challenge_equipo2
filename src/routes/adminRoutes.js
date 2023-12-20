const express = require('express');
const router = express.Router();

const { isLogged } = require('../middlewares/login');

const adminControllers = require('../controllers/adminControllers');

router.use(isLogged);

const uploadFile = require('../middlewares/uploadFiles');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', uploadFile.array('pictures', 2), adminControllers.createItem);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', uploadFile.array('pictures', 2), adminControllers.editItem);
router.delete('/delete/:id', adminControllers.deleteItem);

module.exports = router;
