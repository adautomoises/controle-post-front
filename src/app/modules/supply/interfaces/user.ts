export interface UserResponse {
  id: number;
  login: string;
  role: TipoFuncionario;
}

export enum TipoFuncionario {
  MANAGER = 'Gerente',
  ATTENDANT = 'Atendente',
}
