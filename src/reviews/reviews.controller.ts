import { createReadController } from '../common/read.controller.ts';
import { generateMockReviews } from './reviews.generator.ts';

const reviews = generateMockReviews(10000);
const controller = createReadController(reviews, 'Review');

export const getAllReviews = controller.getAll;
export const getReviewById = controller.getById;
