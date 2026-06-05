export type Review = {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  comment: string;
  isVerifiedPurchase: boolean;
  createdAt: Date;
};
