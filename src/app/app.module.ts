import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users/users.service';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { CanActivateViaAuthGuardService } from './guards/can-activate-via-auth-guard.service';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService, CookieService, CanActivateViaAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
