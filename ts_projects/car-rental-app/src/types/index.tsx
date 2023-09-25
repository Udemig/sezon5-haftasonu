import { MouseEventHandler } from 'react';

export interface IButtonProps {
  title: string;
  designs?: string;
  btnType?: 'button' | 'submit';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rIcon?: string;
}

export interface ICarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: 'gas' | 'diesel' | 'electricity';
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface IOption {
  label: string;
  value: string;
}
