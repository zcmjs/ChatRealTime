import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, MainComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
