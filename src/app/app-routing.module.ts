import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { CanActivateViaAuthGuardService } from './guards/can-activate-via-auth-guard.service';
import { CanDeactivateGuardService } from './guards/can-deactivate-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", component: AppComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "register", component: RegisterComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent, canDeactivate: [CanDeactivateGuardService],pathMatch: "full"},
  {path: "films", component: FilmsComponent, canActivate: [CanActivateViaAuthGuardService],  pathMatch: "full"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
