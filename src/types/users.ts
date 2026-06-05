export const accountStatus = {
  Active: 'Active',
  Inactive: 'Inactive',
  Banned: 'Banned'
} as const;

export type AccountStatus = typeof accountStatus[keyof typeof accountStatus];

export type User = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    employeeId: string;
    emailId: string;
    phoneNumber: string;
    accountStatus: AccountStatus;
    createdAt: Date;
};