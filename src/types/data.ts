export interface ComputerBasicInfo {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Computer extends ComputerBasicInfo {
  details?: {
    cpu?: number;
    ram?: number;
  };
}
