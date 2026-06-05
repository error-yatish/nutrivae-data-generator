import { faker } from "@faker-js/faker";
import { accountStatus } from "../types/users.ts";

export const generateSingleMockUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    emailId: faker.internet.email(),
    employeeId: faker.helpers.fromRegExp(/EMP-[A-Z]{2}-[0-9]{4}/),
    phoneNumber: faker.phone.number({ style: "international" }),
    accountStatus: faker.helpers.enumValue(accountStatus),
    createdAt: faker.date.past(),
  };
};

export const generateMockUsers = (length: number = 5) =>
  Array.from({ length }, () => generateSingleMockUser());
