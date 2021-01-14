import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cidades, RequestCidade } from '../cidades/cidades';

@Injectable({
  providedIn: 'root',
})
export class CidadesService {
  private url = `api/estados/`

  private cidades = new BehaviorSubject<Cidades[]>([]);

  get cidades$() { return this.cidades.asObservable(); }

  constructor(private http: HttpClient) { }

  getCidades(id: string): void {
    const cidadeUrl = `${id}/cidades`;
    const _url = `${this.url}${cidadeUrl}`
    this.http.get<Cidades[]>(_url)
      .subscribe(response => this.cidades.next(response));
  }

  createCidade(id: String, request: FormGroup): Observable<FormGroup> {
    const cidadeUrl = `${this.url}${id}/cidades/add`;
    return this.http.post<FormGroup>(cidadeUrl, request.value);
  }

  getCidade(id: string, cidadeId: string): Observable<Cidades> {
    const cidadeUrl = `${this.url}${id}/cidades/${cidadeId}`;
    return this.http.get<Cidades>(cidadeUrl)
  }

  updateCidade(id: string, cidadeId: string, request: FormGroup): Observable<FormGroup> {
    const cidadeUrl = `${this.url}${id}/cidades/update/${cidadeId}`;
    return this.http.put<FormGroup>(cidadeUrl, request.value);
  }

  deleteCidade(id: string, cidadeId: string): Observable<any> {
    const cidadeUrl = `${this.url}${id}/cidades/delete/${cidadeId}`;
    return this.http.delete<any>(cidadeUrl);
  }
}
