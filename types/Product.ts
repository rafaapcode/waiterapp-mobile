export type ProductsType = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  discount: boolean;
  priceInDiscount: number;
  ingredients: {
    name: string;
    icon: string;
    _id: string;
  }[];
};
