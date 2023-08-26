export type ItemProps = {
  attackPower?: string;
  cost?: number;
  description?: string;
  effects?: string;
  image: string;
  name: string;
  slots?: number;
  type?: string;
};

export type Attack = {
  amount: number;
  name: string;
};

export type Defence = {
  amount: number;
  name: string;
};
