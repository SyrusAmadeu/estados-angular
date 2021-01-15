import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CidadesService } from '../service/cidades.service';
import { Cidades } from './cidades';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css'],
})
export class CidadesComponent implements OnInit {
  id: string;
  cidades: Cidades[] = this.getCidades();
  cidadeExclusao: Cidades;
  populacao: number;
  constructor(
    private cidadeService: CidadesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.activatedRoute.queryParamMap.subscribe((q) => {});
        this.getCidades();
      }
    });
  }

  getPopulacao(){
    this.populacao = 0;
    for (let i = 0; i < this.cidades.length; i++) {
      this.populacao += this.cidades[i].populacao;
    }
  }

  getCidades(): any {
    this.id = this.activatedRoute.snapshot.paramMap.get('id1');
    this.cidadeService
      .getCidades(this.id)
      .subscribe((cidades) => (this.cidades = cidades));
  }

  ngOnInit(): void { 
    this.getPopulacao();
  }

  deletarCidade(cidade: Cidades): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id1');
    if (confirm(`Você deseja realmente deletar ${cidade.nome} do mapa?`)) {
      this.cidadeService.deleteCidade(this.id, cidade.id).subscribe();
    }
    window.location.reload();
  }

  cancel() {
    this.router.navigate(['estados/2']);
  }
}
