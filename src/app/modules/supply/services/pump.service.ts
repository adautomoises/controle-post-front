import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments.development';
import { PumpResponse } from '../interfaces/pump';

@Injectable({
  providedIn: 'root',
})
export class PumpService {
  private baseUrl = `${environment.api}/bombas`;

  constructor(private http: HttpClient) {}

  getPumps(): Observable<PumpResponse[]> {
    return this.http.get<PumpResponse[]>(this.baseUrl);
  }
}
