import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environments.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private baseUrl = `${environment.api}/relatorio`;

  constructor(private http: HttpClient) {}

  exportReport(): Observable<void> {
    return this.http.get<void>(this.baseUrl);
  }
}
