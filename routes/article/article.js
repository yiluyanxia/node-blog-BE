const express = require('express');

const router = express.Router();

const articleController = require('./articleController.js')

router.post('/addArticle', articleController.addArticle);
router.delete('/deleteArticle/:id', articleController.deleteArticle);
router.put('/updateArticle/:id', articleController.updateArticle);
router.get('/getArticle/:id', articleController.getArticle);
router.get('/getArticleList', articleController.getArticleList);

export default router
