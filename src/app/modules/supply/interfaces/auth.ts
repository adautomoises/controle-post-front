export interface RegisterRequest {
  login: string;
  password: string;
  role: TipoFuncionario;
}

export enum TipoFuncionario {
  MANAGER = 'Gerente',
  ATTENDANT = 'Atendente',
}
