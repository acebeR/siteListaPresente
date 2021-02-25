import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './tela-inicial/list/list.component';
import { AdminComponent } from './admin/admin.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { PresenteComponent } from './presente/presente.component';
import { ListPresenteComponent } from './presente/list-presente/list-presente.component';
import { EditPresenteComponent } from './presente/edit-presente/edit-presente.component';
import { EditComponent } from './admin/edit/edit.component';
import { ListaPresenteConvidado } from './presente/lista-presente-convidado/lista-presente-convidado.component';
import { BarraMenuComponent } from './barra-menu/barra-menu';


const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    TelaInicialComponent,
    LoginComponent,
    ListComponent,
    AdminComponent,
    ListAdminComponent,
    PresenteComponent,
    ListPresenteComponent,
    EditPresenteComponent,
    EditComponent,
    ListaPresenteConvidado,
    BarraMenuComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

