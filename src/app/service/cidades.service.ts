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

  constructor(private http: HttpClient) { }

  getCidades(id: string): Observable<Cidades[]> {
    const cidadeUrl = `${id}/cidades`;
    const _url = `${this.url}${cidadeUrl}`
    return this.http.get<Cidades[]>(_url)
  }

  createCidade(id: String, request: FormGroup): Observable<FormGroup> {
    const cidadeUrl = `${this.url}${id}/cidades`;
    return this.http.post<FormGroup>(cidadeUrl, request.value);
  }

  getCidade(id: string, cidadeId: string): Observable<Cidades> {
    const cidadeUrl = `${this.url}${id}/cidades/${cidadeId}`;
    return this.http.get<Cidades>(cidadeUrl)
  }

  deleteCidade(id: string, cidadeId: number): Observable<any> {
    const cidadeUrl = `${this.url}${id}/cidades/${cidadeId}`;
    return this.http.delete<any>(cidadeUrl);
  }
}
