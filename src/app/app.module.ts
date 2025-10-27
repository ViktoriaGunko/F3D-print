import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { PricesAndServicesComponent } from './prices-and-services/prices-and-services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavMenu1Component } from './nav-menu1/nav-menu1.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


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
    NavMenu1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
