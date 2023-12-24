import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TabFormComponent } from './tab-form/tab-form.component';
import { SteeperFormComponent } from './steeper-form/steeper-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    TabFormComponent,
    SteeperFormComponent,
    RegisterComponent,
    LoginLayoutComponent,
    LandingLayoutComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
