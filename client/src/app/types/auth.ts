export interface User {
  id: string;
  email: string;
  password: string;
  currency: string;
  initial_income: number;
}

export interface UserLogin {
  email: string;
  password: string;
}
