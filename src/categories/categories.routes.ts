import { Router } from 'express';
import { getAllCategories, getCategoryById } from './categories.controller.ts';

const router = Router();

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);

export default router;
