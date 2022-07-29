export interface Datum {
  id: number;
  name: string;
  icon: string;
}

export interface INav {
  message: string;
  data: Datum[];
}
