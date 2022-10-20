import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesAdminComponent } from './clientes-admin/clientes-admin.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { HomeOperatorComponent } from './home-operator/home-operator.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TeleoperadoresComponent } from './teleoperadores/teleoperadores.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:HomeComponent},
  {path:'clientesadmin',component:ClientesAdminComponent},
  {path:'teleoperadores',component:HomeOperatorComponent},
  {path:'home',component:LandingPageComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'clientes',component:ClientesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
