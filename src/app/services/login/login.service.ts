import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/core/interfaces/login';
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
