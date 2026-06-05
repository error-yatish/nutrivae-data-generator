import { Router } from 'express';
import { getAllProducts, getProductById } from './products.controller.ts';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

export default router;
