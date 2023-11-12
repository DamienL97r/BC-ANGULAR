import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { HeaderResponsiveNavbarComponent } from './header-responsive-navbar/header-responsive-navbar.component';
import { Error404Component } from './error404/error404.component';
import { DepotArticlesComponent } from './depot-articles/depot-articles.component';
import { HomeCTAComponent } from './home-cta/home-cta.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { AnchorComponent } from './anchor/anchor.component';
import { HomeAboutUsComponent } from './home-about-us/home-about-us.component';
import { HomeTestimonialComponent } from './home-testimonial/home-testimonial.component';
import { DepotArticlesHeaderComponent } from './depot-articles-header/depot-articles-header.component';
import { DepotArticlesContainerArticlesComponent } from './depot-articles-container-articles/depot-articles-container-articles.component';
import { DepotArticlesContainerBasketComponent } from './depot-articles-container-basket/depot-articles-container-basket.component';
import { DepotArticlesModalComponent } from './depot-articles-modal/depot-articles-modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpInComponent } from './sign-up-in/sign-up-in.component';
import { AuthInterceptor } from './auth.interceptor';
import { MyAccountComponent } from './my-account/my-account.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderInformationsComponent } from './order-informations/order-informations.component';
import { OrderPaiymentComponent } from './order-paiyment/order-paiyment.component';
import { TokenInterceptor } from './token-interceptor.interceptor';
import { ThankPageComponent } from './thank-page/thank-page.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    TarifsComponent,
    HeaderResponsiveNavbarComponent,
    Error404Component,
    DepotArticlesComponent,
    HomeCTAComponent,
    HomeServicesComponent,
    AnchorComponent,
    HomeAboutUsComponent,
    HomeTestimonialComponent,
    DepotArticlesHeaderComponent,
    DepotArticlesContainerArticlesComponent,
    DepotArticlesContainerBasketComponent,
    DepotArticlesModalComponent,
    DashboardComponent,
    SignUpInComponent,
    MyAccountComponent,
    OrderSummaryComponent,
    OrderInformationsComponent,
    OrderPaiymentComponent,
    ThankPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
