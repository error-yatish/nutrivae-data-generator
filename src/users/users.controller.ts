import { generateMockUsers } from './users.generator.ts';
import { createReadController } from '../common/read.controller.ts';

const users = generateMockUsers(50);
const controller = createReadController(users, 'User');

export const getAllUsers = controller.getAll;
export const getUserById = controller.getById;
