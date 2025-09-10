import data from './products.json';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageId: string;
};

export const Products: Product[] = data.products;
