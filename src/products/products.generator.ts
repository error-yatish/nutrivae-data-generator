import { faker } from '@faker-js/faker';
import { type Product } from '../types/products.ts';

export const generateSingleMockProduct = (): Product => ({
  id: faker.string.uuid(),
  categoryId: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  sku: faker.helpers.fromRegExp(/[A-Z]{3}-[0-9]{6}/),
  price: Number(faker.commerce.price({ min: 5, max: 500, dec: 2 })),
  currency: 'USD',
  stock: faker.number.int({ min: 0, max: 500 }),
  rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
  imageUrl: faker.image.url({ width: 640, height: 480 }),
  isActive: faker.datatype.boolean(),
  createdAt: faker.date.past()
});

export const generateMockProducts = (length: number = 5): Product[] =>
  Array.from({ length }, generateSingleMockProduct);
