import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadosService } from '../service/estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css'],
})
export class EstadosComponent implements OnInit {
  constructor(private estadoService: EstadosService) {}

  estados = new FormControl('');

  get estados$() {
    return this.estadoService.estados$;
  }

  ngOnInit() {
    this.estadoService.getEstados();
  }
}
