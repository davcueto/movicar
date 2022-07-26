import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { NuevaCuentaComponent } from './nueva-cuenta/nueva-cuenta.component';
import { VerificarNumeroComponent } from './verificar-numero/verificar-numero.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'nueva-cuenta',
        component: NuevaCuentaComponent
      },
      {
        path: 'verificar-numero/:number',
        component: VerificarNumeroComponent
      }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }