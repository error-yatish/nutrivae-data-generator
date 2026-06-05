import { createReadController } from '../common/read.controller.ts';
import { generateMockReviews } from './reviews.generator.ts';

const reviews = generateMockReviews(50);
const controller = createReadController(reviews, 'Review');

export const getAllReviews = controller.getAll;
export const getReviewById = controller.getById;
