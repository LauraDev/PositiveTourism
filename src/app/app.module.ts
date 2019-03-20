import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/404/404.component';
import { TourListComponent } from './pages/tour/tour-list/tour-list.component';
import { AboutComponent } from './pages/about/about.component';
import { TextSlideshowComponent } from './components/text-slideshow/text-slideshow.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TourOverviewComponent } from './pages/tour/tour-overview/tour-overview.component';
import { TourDetailComponent } from './pages/tour/tour-detail/tour-detail.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxTextComponent } from './components/checkbox-text/checkbox-text.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    TourListComponent,
    AboutComponent,
    TextSlideshowComponent,
    PrivacyPolicyComponent,
    TourOverviewComponent,
    TourDetailComponent,
    CardComponent,
    CheckboxTextComponent,
    ImageSliderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
