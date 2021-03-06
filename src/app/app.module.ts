import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EstadosComponent } from './estados/estados.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CidadesComponent } from './cidades/cidades.component';
import { CreateCidadeComponent } from './cidades/create-cidade/create-cidade.component';
import { DeleteCidadeComponent } from './cidades/delete-cidade/delete-cidade.component';
import { ListarEstadosComponent } from './listar-estados/listar-estados.component';

@NgModule({
  declarations: [AppComponent, EstadosComponent, NavBarComponent, CidadesComponent, CreateCidadeComponent, DeleteCidadeComponent, ListarEstadosComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
