const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photo_controller'); 

router.post('/photos', photoController.createImage);
router.get('/photos/:id', photoController.getImage);
router.put('/photos/:id', photoController.updateImage);
router.delete('/photos/:id', photoController.deleteImage);

module.exports = router;
