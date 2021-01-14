import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Estado } from '../estados/estado';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  private url = 'api/estados';
  private estados = new BehaviorSubject<Estado[]>([]);
  get estados$() {
    return this.estados.asObservable();
  }
  constructor(private http: HttpClient) {}
  estado: Estado;
  getEstados(): void {
    this.http
      .get<Estado[]>(this.url)
      .subscribe((response) => this.estados.next(response));
  }

  getEstado(id: string): Observable<Estado> {
    const estadoUrl = `${this.url}/${id}`;
    return this.http.get<Estado>(estadoUrl);
  }

  
}
