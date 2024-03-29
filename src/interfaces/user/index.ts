export interface UserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  description: string;
  type: string;
  token_reset_password?: string;
  password: string;
  date_of_birth: string;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  description: string;
  type: string;
  password?: string;
  token_reset_password?: string;
  date_of_birth: string;
  anoucements: string[];
}

export interface UserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  description?: string;
  type?: string;
  password?: string;
  token_reset_password?: string;
  date_of_birth?: string;
}
