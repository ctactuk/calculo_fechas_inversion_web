import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'calculadora',
    component: CalculadoraComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
