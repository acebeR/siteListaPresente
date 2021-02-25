import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PresenteComponent } from './presente/presente.component';
import { EditPresenteComponent } from './presente/edit-presente/edit-presente.component';
import { BarraMenuComponent } from './barra-menu/barra-menu';
import { TelaInicialComponent} from './tela-inicial/tela-inicial.component'

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path : 'presente/:id', component: PresenteComponent},
  { path : 'presente/cadastro', component: EditPresenteComponent},
  { path : 'barraMenu', component: BarraMenuComponent},
  { path : 'home', component: TelaInicialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
