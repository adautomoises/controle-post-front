import { TipoFuncionario } from './user';

export interface RegisterRequest {
  login: string;
  password: string;
  role: TipoFuncionario;
}
