// import { NgModule } from '@angular/core';
// import {HomeComponent} from "./home/home.component";
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { HeroComponent } from './hero/hero.component';
// import { ServicesComponent } from './services/services.component';
// import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
// import { PricesAndServicesComponent } from './prices-and-services/prices-and-services.component';
// import { PortfolioComponent } from './portfolio/portfolio.component';
// import { FooterComponent } from './footer/footer.component';
// import {FormsModule} from "@angular/forms";
// import { NavMenuComponent } from './nav-menu/nav-menu.component';
// import { NavMenu1Component } from './nav-menu1/nav-menu1.component';
// import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatDialogModule} from "@angular/material/dialog";
// import {MatFormFieldModule} from "@angular/material/form-field";
// import {MatInputModule} from "@angular/material/input";
// import {MatButtonModule} from "@angular/material/button";
// import { SharedModule } from './shared/shared.module';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     HeroComponent,
//     ServicesComponent,
//     HowWeWorkComponent,
//     PricesAndServicesComponent,
//     PortfolioComponent,
//     FooterComponent,
//     NavMenuComponent,
//     NavMenu1Component,
//     HomeComponent,
//
//   ],
//   imports: [
//     CommonModule,
//     BrowserModule,
//     FormsModule,
//     RouterModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MatDialogModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     SharedModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Компоненти
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { PricesAndServicesComponent } from './prices-and-services/prices-and-services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavMenu1Component } from './nav-menu1/nav-menu1.component';
import { HomeComponent } from './home/home.component';

// Маршрутизація
import { AppRoutingModule } from './app-routing.module';

// Shared module (для SmtpService, DialogService тощо)
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    HowWeWorkComponent,
    PricesAndServicesComponent,
    PortfolioComponent,
    FooterComponent,
    NavMenuComponent,
    NavMenu1Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, // додали для formGroup
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule, // для повідомлень про успіх/помилку
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
