import { Router } from 'express';
import { getAllOrders, getOrderById } from './orders.controller.ts';

const router = Router();

router.get('/', getAllOrders);
router.get('/:id', getOrderById);

export default router;
