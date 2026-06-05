export const orderStatus = {
  Pending: 'Pending',
  Confirmed: 'Confirmed',
  Shipped: 'Shipped',
  Delivered: 'Delivered',
  Cancelled: 'Cancelled'
} as const;

export type OrderStatus = typeof orderStatus[keyof typeof orderStatus];

export type ShippingAddress = {
  fullName: string;
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type OrderItem = {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type Order = {
  id: string;
  orderNumber: string;
  userId: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  currency: string;
  shippingAddress: ShippingAddress;
  placedAt: Date;
};
