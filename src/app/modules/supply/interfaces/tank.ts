import { TipoCombustivel } from './supply';

export interface TankResponse {
  id: number;
  combustivel: {
    id: number;
    tipo: TipoCombustivel;
    valor: number;
  };
  capacidade: number;
}
