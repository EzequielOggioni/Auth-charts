import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CantidadComponent } from './componentes/emision/cantidad/cantidad.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'barras',component:CantidadComponent},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
