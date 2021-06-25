import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Login } from 'src/app/components/login/login';
import { baseUrl } from 'src/app/models/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(data: Login):Observable<Login>{
    return this.httpClient.post<Login>(`${baseUrl}/login`,data);
  }
}
