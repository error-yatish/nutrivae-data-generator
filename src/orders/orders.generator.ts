import { faker } from '@faker-js/faker';
import {
  orderStatus,
  type Order,
  type OrderItem,
  type ShippingAddress
} from '../types/orders.ts';

const toMoney = (value: number): number => Number(value.toFixed(2));

const generateOrderItem = (): OrderItem => {
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

const generateShippingAddress = (): ShippingAddress => ({
  fullName: faker.person.fullName(),
  addressLine: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  postalCode: faker.location.zipCode(),
  country: faker.location.country()
});

export const generateSingleMockOrder = (): Order => {
  const items = Array.from(
    { length: faker.number.int({ min: 1, max: 5 }) },
    generateOrderItem
  );
  const subtotal = toMoney(items.reduce((total, item) => total + item.totalPrice, 0));
  const shippingCost = toMoney(faker.number.float({ min: 0, max: 30 }));
  const tax = toMoney(subtotal * faker.number.float({ min: 0.05, max: 0.15 }));

  return {
    id: faker.string.uuid(),
    orderNumber: faker.helpers.fromRegExp(/ORD-[0-9]{8}/),
    userId: faker.string.uuid(),
    status: faker.helpers.enumValue(orderStatus),
    items,
    subtotal,
    shippingCost,
    tax,
    total: toMoney(subtotal + shippingCost + tax),
    currency: 'USD',
    shippingAddress: generateShippingAddress(),
    placedAt: faker.date.past()
  };
};

export const generateMockOrders = (length: number = 5): Order[] =>
  Array.from({ length }, generateSingleMockOrder);
