import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadesService } from '../service/cidades.service';
import { Cidades } from './cidades';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css'],
})
export class CidadesComponent implements OnInit {
  id: string;
  cidade: Cidades;
  constructor(
    private cidadeService: CidadesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    
  }
}
