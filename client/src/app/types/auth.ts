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

export interface JwtToken {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}
