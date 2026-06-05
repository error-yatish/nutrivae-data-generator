import { createReadController } from '../common/read.controller.ts';
import { generateMockCategories } from './categories.generator.ts';

const categories = generateMockCategories(50);
const controller = createReadController(categories, 'Category');

export const getAllCategories = controller.getAll;
export const getCategoryById = controller.getById;
