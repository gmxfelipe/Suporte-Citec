import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { CandidaturaMainComponent } from './candidatura-main/candidatura-main.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { ProcessosComponent } from './processos/processos.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeMainComponent },
  { path: 'candidatura', component: CandidaturaMainComponent },
  { path: 'avaliacao', component: AvaliacaoComponent },
  { path: 'processos', component: ProcessosComponent },
  { path: 'projetos', component: ProjetosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
