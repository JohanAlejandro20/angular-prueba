import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitSearchUserComponent } from './git-search-user/git-search-user.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';


const routes: Routes = [
  {path: '',
    component: PaginaInicioComponent},
    {path: 'search',
   redirectTo: '/search/angular',
  pathMatch: 'full'},
    {path:'search/:query',
   component: GitSearchComponent},
   {path: 'search2',
    component: GitSearchUserComponent},
    {path: 'search2',
    component: GitSearchUserComponent},
    {path:'**', component: PaginaNoEncontradaComponent},
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
