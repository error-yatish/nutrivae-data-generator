import { Router } from 'express';
import { getAllReviews, getReviewById } from './reviews.controller.ts';

const router = Router();

router.get('/', getAllReviews);
router.get('/:id', getReviewById);

export default router;
