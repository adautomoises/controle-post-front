import { PumpResponse } from './pump';
export interface SupplyResponse {
  id: number;
  bomba: PumpResponse;
  imposto: number;
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

export interface Frentista {
  name: string;
  codigo: number;
}
