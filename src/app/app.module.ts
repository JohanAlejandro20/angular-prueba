import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchService } from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GitSearchUserComponent } from './git-search-user/git-search-user.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    GitSearchUserComponent,
    PaginaInicioComponent,
    PaginaNoEncontradaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
