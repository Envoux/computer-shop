export interface BasicData {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Data extends BasicData {
  details?: {
    cpu?: number;
    ram?: number;
  };
}
