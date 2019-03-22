import { AboutComponent } from './pages/about/about.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/404/404.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/ui/ui.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiModule
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    PrivacyPolicyComponent
  ]
})

export class ShowcaseModule {}
