import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadesService } from 'src/app/service/cidades.service';

@Component({
  selector: 'app-create-cidade',
  templateUrl: './create-cidade.component.html',
  styleUrls: ['./create-cidade.component.css'],
})
export class CreateCidadeComponent implements OnInit {
  id: string = this.activatedRoute.snapshot.paramMap.get('id1');

  validation = [
    Validators.required
  ];

  createCidadeForm = new FormGroup({
    nome: new FormControl('', this.validation),
    populacao: new FormControl('', this.validation),
  });
  constructor(
    private cidadeService: CidadesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  create() {
    this.cidadeService.createCidade(this.id, this.createCidadeForm).subscribe();
    console.log('adding ' + this.createCidadeForm.value.nome)
    this.router.navigate(['estados/'+this.id+'/cidades']);
    
  }

  cancel() {
    this.router.navigate(['estados/'+this.id+'/cidades']);
  }
}
