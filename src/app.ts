import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import cartRoutes from './carts/carts.routes.ts';
import categoryRoutes from './categories/categories.routes.ts';
import orderRoutes from './orders/orders.routes.ts';
import productRoutes from './products/products.routes.ts';
import reviewRoutes from './reviews/reviews.routes.ts';
import userRoutes from './users/users.routes.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' })); 

app.use('/api/carts', cartRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Clean architecture server running at http://localhost:${PORT}`);
});
