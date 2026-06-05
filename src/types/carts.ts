export type CartItem = {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type Cart = {
  id: string;
  userId: string;
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
};
