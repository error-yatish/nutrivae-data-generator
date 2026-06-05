import { createReadController } from '../common/read.controller.ts';
import { generateMockOrders } from './orders.generator.ts';

const orders = generateMockOrders(50);
const controller = createReadController(orders, 'Order');

export const getAllOrders = controller.getAll;
export const getOrderById = controller.getById;
