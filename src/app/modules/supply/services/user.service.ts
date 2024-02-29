import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments.development';
import { UserResponse } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = `${environment.api}/users`;

  constructor(private httpClient: HttpClient) {}

  public listarFrentistas(): Observable<UserResponse[]> {
    return this.httpClient.get<UserResponse[]>(this.url + '/frentistas');
  }
}
