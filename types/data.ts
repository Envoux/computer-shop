export type BasicData = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type Data = BasicData & {
  details?: {
    cpu?: number;
    ram?: number;
  };
};
