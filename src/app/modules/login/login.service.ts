import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments.development';

interface LoginRequest {
  login: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = `${environment.api}/auth`;

  constructor(private httpClient: HttpClient) {}

  public login(login: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.url + '/login', login);
  }
}
