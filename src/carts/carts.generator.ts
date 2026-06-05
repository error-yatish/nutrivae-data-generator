import { faker } from '@faker-js/faker';
import { type Cart, type CartItem } from '../types/carts.ts';

const toMoney = (value: number): number => Number(value.toFixed(2));

const generateCartItem = (): CartItem => {
  const quantity = faker.number.int({ min: 1, max: 5 });
  const unitPrice = Number(faker.commerce.price({ min: 5, max: 500, dec: 2 }));

  return {
    productId: faker.string.uuid(),
    productName: faker.commerce.productName(),
    quantity,
    unitPrice,
    totalPrice: toMoney(quantity * unitPrice)
  };
};

export const generateSingleMockCart = (): Cart => {
  const items = Array.from(
    { length: faker.number.int({ min: 1, max: 5 }) },
    generateCartItem
  );
  const createdAt = faker.date.past();

  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    items,
    totalItems: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: toMoney(items.reduce((total, item) => total + item.totalPrice, 0)),
    currency: 'USD',
    createdAt,
    updatedAt: faker.date.between({ from: createdAt, to: new Date() })
  };
};

export const generateMockCarts = (length: number = 5): Cart[] =>
  Array.from({ length }, generateSingleMockCart);
