import { createReadController } from '../common/read.controller.ts';
import { generateMockCarts } from './carts.generator.ts';

const carts = generateMockCarts(10000);
const controller = createReadController(carts, 'Cart');

export const getAllCarts = controller.getAll;
export const getCartById = controller.getById;
