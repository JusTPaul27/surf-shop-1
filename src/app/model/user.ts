import { Order } from "./order";
import { Product } from "./product";

export interface User {
  username: string;
  name: string;
  surname: string;
  dob: Date;
  email: string;
  password: string;
  address: string;
  city: string;
  cardNumber: number;
  id: string;
  cart?: string[];
  orders: Order[];
}



