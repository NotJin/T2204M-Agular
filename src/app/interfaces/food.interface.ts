export interface Datum {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface IFood {
  message: string;
  data: Datum[];
}
