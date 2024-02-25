export interface SupplyResponse {
  id: number;
  tanque: {
    id: number;
    combustivel: {
      id: number;
      tipo: TipoCombustivel;
      valor: number;
    };
    bomba: number;
  };
  litros: number;
  valor: number;
  data: string;
}
export interface SupplyRequest {
  bomba_id: number;
  valor: number;
  data: string;
}

export enum TipoCombustivel {
  GASOLINA = 'Gasolina',
  DIESEL = 'Diesel',
}
export interface Tanque {
  id: number;
  combustivel: {
    tipo: string;
    valor: number;
  };
  capacidade: number;
}
export interface Frentista {
  name: string;
  codigo: number;
}
