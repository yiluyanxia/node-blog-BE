const express = require('express');

const router = express.Router();

const tagController = require('./tagController.js')

router.post('/addTag', tagController.addTag);
router.delete('/:id', tagController.deleteTag);
router.get('/getTagList', tagController.getTagList);
router.get('/getTag/:id', tagController.getTag);
router.put('/updateTag/:id', tagController.updateTag);

export default router
