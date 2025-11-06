import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {AppComponent} from "./app.component";
import {ServicesComponent} from "./services/services.component";
import {PricesAndServicesComponent} from "./prices-and-services/prices-and-services.component";
import {HowWeWorkComponent} from "./how-we-work/how-we-work.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pricing', component: PricesAndServicesComponent },
  { path: 'how-we-work', component: HowWeWorkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'disabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
