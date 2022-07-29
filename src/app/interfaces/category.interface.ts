export interface Datum {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface ICategory {
  message: string;
  data: Datum[];
}
