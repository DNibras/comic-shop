interface ProductModel {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  publisher: string;
  year: number;
  category: string;
  language: string;
  rating: {
    rate: number;
    count: number;
  };
}
