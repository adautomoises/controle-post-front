import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments.development';
import { TankResponse } from '../interfaces/tank';

@Injectable({
  providedIn: 'root',
})
export class TankService {
  private baseUrl = `${environment.api}/tanques`;

  constructor(private http: HttpClient) {}

  getTanks(): Observable<TankResponse[]> {
    return this.http.get<TankResponse[]>(this.baseUrl);
  }
}
