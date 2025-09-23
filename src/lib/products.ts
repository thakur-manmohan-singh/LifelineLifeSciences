import data from './products.json';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
};

export const Products: Product[] = data.products;
