import { Router } from 'express';
import { getAllCarts, getCartById } from './carts.controller.ts';

const router = Router();

router.get('/', getAllCarts);
router.get('/:id', getCartById);

export default router;
