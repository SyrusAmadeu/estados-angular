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
  id: string = this.activatedRoute.snapshot.paramMap.get('id');

  validation = [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(80),
  ];
  validationDate = [Validators.required, Validators.maxLength(10)];

  createCidadeForm = new FormGroup({
    name: new FormControl('', this.validation),
    date: new FormControl('', this.validation),
  });
  constructor(
    private cidadeService: CidadesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  create() {
    this.cidadeService.createCidade(this.id, this.createCidadeForm).subscribe();
    this.router.navigate(['estados']);
  }

  cancel() {
    this.router.navigate(['estados']);
  }
}
