import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { KillersComponent } from './killers/killers.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'killers', component: KillersComponent},
  {path: 'assassians/:id', redirectTo: 'killers', pathMatch: 'full'},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
