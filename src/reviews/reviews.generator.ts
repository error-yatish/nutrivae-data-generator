import { faker } from '@faker-js/faker';
import { type Review } from '../types/reviews.ts';

export const generateSingleMockReview = (): Review => ({
  id: faker.string.uuid(),
  productId: faker.string.uuid(),
  userId: faker.string.uuid(),
  rating: faker.number.int({ min: 1, max: 5 }),
  title: faker.lorem.sentence({ min: 3, max: 8 }),
  comment: faker.lorem.paragraph(),
  isVerifiedPurchase: faker.datatype.boolean(),
  createdAt: faker.date.past()
});

export const generateMockReviews = (length: number = 5): Review[] =>
  Array.from({ length }, generateSingleMockReview);
