import express from 'express';
import { getArticles, postArticle } from '../controllers/articulosController';

const router = express.Router();

router.get('/', getArticles);
router.post('/articulos', postArticle)

export default router;