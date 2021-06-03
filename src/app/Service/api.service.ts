import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Model/usuario';
import { LoginForm } from '../Model/loginForm';
import { Reporte } from '../Model/reporte';
import { Response } from '../Model/response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private usuarioUrl = 'http://localhost:8080/api/v1/usuario';
  private reporterUrl = 'http://localhost:8080/api/v1/reporte';

  constructor(private http: HttpClient) { }

  public register(usuario: Usuario): Observable<Response> {
    return this.http.post<Response>(`${this.usuarioUrl}/register`, usuario, httpOptions);
  }

  public login(form: LoginForm): Observable<Response> {
    return this.http.post<Response>(`${this.usuarioUrl}/login`, form, httpOptions);
  }

  public getReportes(): Observable<Reporte[]>{
    return this.http.get<Reporte[]>(this.reporterUrl, httpOptions);
  }

  public getReporteById(id: number): Observable<Reporte> {
    return this.http.get<Reporte>(`${this.reporterUrl}/${id}`, httpOptions);
  }

  public addReporte(reporte: Reporte): Observable<Reporte> {
    return this.http.post<Reporte>(this.reporterUrl, reporte, httpOptions);
  }

  public updateReporte(reporte: Reporte): Observable<Object> {
    return this.http.put(this.reporterUrl, reporte, httpOptions);
  }
 
  public deleteReporte(reporte: Reporte): Observable<any> {
    return this.http.delete(`${this.reporterUrl}/${reporte.id}`, httpOptions);
  }
}