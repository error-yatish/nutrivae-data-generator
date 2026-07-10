import { createReadController } from '../common/read.controller.ts';
import { generateMockProducts } from './products.generator.ts';

const products = generateMockProducts(10000);
const controller = createReadController(products, 'Product');

export const getAllProducts = controller.getAll;
export const getProductById = controller.getById;
