import { faker } from '@faker-js/faker';
import { type Category } from '../types/categories.ts';

export const generateSingleMockCategory = (): Category => {
  const name = faker.commerce.department();

  return {
    id: faker.string.uuid(),
    name,
    slug: `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${faker.string.alpha(4).toLowerCase()}`,
    description: faker.commerce.productDescription(),
    imageUrl: faker.image.url({ width: 640, height: 480 }),
    isActive: faker.datatype.boolean(),
    createdAt: faker.date.past()
  };
};

export const generateMockCategories = (length: number = 5): Category[] =>
  Array.from({ length }, generateSingleMockCategory);
