import { Injectable } from '@angular/core';
import { Factura } from 'src/app/core/interfaces/factura';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/models/config';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private httpClient: HttpClient) { }

  getFacturas(): Observable<Factura[]>{
    return this.httpClient.get<Factura[]>(`${baseUrl}/invoices`)
  }

  update(factura:Factura):Observable<Factura>{
    return this.httpClient.post<Factura>(`${baseUrl}/invoices/update/`, factura, {headers:this.httpHeaders})
  }

  delete(id:number): Observable<any>{
    return this.httpClient.get(`${baseUrl}/invoices/delete/${id}`)
  }


}
