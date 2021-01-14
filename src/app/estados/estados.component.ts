import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadosService } from '../service/estados.service';
import { Estado } from './estado';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css'],
})
export class EstadosComponent implements OnInit {
  constructor(
    private estadoService: EstadosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      this.getEstado()
  });
  }
  estados = new FormControl('');
  id: string;
  estado: Estado;
  get estados$() {
    return this.estadoService.estados$;
  }
  getEstado(): any {
    this.id = this.activatedRoute.snapshot.paramMap.get('id1');
    this.estadoService
      .getEstado(this.id)
      .subscribe((estado) => (this.estado = estado));
  }
  ngOnInit() {
    this.estadoService.getEstados();
    this.getEstado();
  }
  changeFlag(id: string) {
    this.router.navigate([`estados/${id}`]);
  }
}
