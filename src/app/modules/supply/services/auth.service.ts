import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments.development';
import { RegisterRequest } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${environment.api}/auth`;

  constructor(private httpClient: HttpClient) {}

  public register(register: RegisterRequest): Observable<void> {
    return this.httpClient.post<void>(this.url + '/register', register);
  }
}
