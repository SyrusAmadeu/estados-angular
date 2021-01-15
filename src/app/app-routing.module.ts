import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CidadesComponent } from './cidades/cidades.component';
import { CreateCidadeComponent } from './cidades/create-cidade/create-cidade.component';
import { DeleteCidadeComponent } from './cidades/delete-cidade/delete-cidade.component';
import { EstadosComponent } from './estados/estados.component';

const routes: Routes = [
  {path: '', redirectTo: 'estados/:id1', pathMatch: 'full'},
  {path: 'estados/:id1', component: EstadosComponent},
  {path: 'estados/:id1/cidades', component: CidadesComponent},
  {path: 'estados/:id1/cidades/criar', component: CreateCidadeComponent},
  {path: 'estados/:id1/cidades/:id2', component: CidadesComponent},
  {path: 'estados/:id1/cidades/:id2/deletar', component: DeleteCidadeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
