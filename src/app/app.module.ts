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
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { PricesAndServicesComponent } from './prices-and-services/prices-and-services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

// Маршрутизація
import { AppRoutingModule } from './app-routing.module';

// Shared module (для SmtpService, DialogService тощо)
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ServicesComponent,
    HowWeWorkComponent,
    PricesAndServicesComponent,
    PortfolioComponent,
    FooterComponent,
    NavMenuComponent,
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
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
//
// // Angular Material
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
//
// // Переклади
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//
// // Компоненти
// import { AppComponent } from './app.component';
// import { OrderFormComponent } from './shared/dialogs/order-form/order-form.component';
//
// // Маршрутизація
// import { AppRoutingModule } from './app-routing.module';
//
// // Shared module
// import { SharedModule } from './shared/shared.module';
//
// // Фабрика для TranslateHttpLoader (версія 4.x, без аргументів)
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     OrderFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     FormsModule,
//     ReactiveFormsModule,
//     RouterModule,
//     AppRoutingModule,
//     MatDialogModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     MatSnackBarModule,
//     SharedModule,
//     HttpClientModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     })
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
