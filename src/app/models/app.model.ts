export interface Token {
  access: string;
  refresh: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface Producto {
  id: number;
  producto: string;
}
