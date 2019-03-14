import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TourListComponent } from './pages/tour/tour-list/tour-list.component';
import { AboutComponent } from './pages/about/about.component';
import { TextSlideshowComponent } from './components/text-slideshow/text-slideshow.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

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
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
