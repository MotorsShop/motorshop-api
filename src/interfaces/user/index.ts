export interface UserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  description: string;
  type: string;
  password: string;
  date_of_birth: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  description: string;
  type: string;
  password?: string;
  date_of_birth: string;
}

export interface UserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  description?: string;
  type?: string;
  password?: string;
  date_of_birth?: string;
}
