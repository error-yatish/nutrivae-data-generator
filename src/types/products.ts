export type Product = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  sku: string;
  price: number;
  currency: string;
  stock: number;
  rating: number;
  imageUrl: string;
  isActive: boolean;
  createdAt: Date;
};
