import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseConfig } from 'src/core/confg';
import { Producto } from '../models/app.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_HOST = BaseConfig.API_HOST;

  constructor(private http: HttpClient) {}

  obtenerProductos() {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    return this.http.get<Producto[]>(this.API_HOST + 'productos/', { headers });
  }

  obtenerCalculo(data: any) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    return this.http.post(this.API_HOST + 'calcularfechas', data, { headers });
  }
}
