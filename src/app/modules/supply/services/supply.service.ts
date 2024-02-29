import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environments.development';
import { SupplyRequest, SupplyResponse } from '../interfaces/supply';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupplyService {
  private baseUrl = `${environment.api}/abastecimento`;

  constructor(private http: HttpClient) {}

  getSupplies(): Observable<SupplyResponse[]> {
    return this.http.get<SupplyResponse[]>(this.baseUrl);
  }

  postSupply(supply: SupplyRequest): Observable<SupplyResponse> {
    return this.http.post<SupplyResponse>(this.baseUrl, supply);
  }
}
