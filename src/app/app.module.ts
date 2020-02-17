import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InformationComponent } from './information/information.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    ServicesComponent,
    PricingComponent,
    NewsComponent,
    ContactComponent,
    InformationComponent
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, BrowserAnimationsModule, MatSlideToggleModule, FormsModule],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
