import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './showcase/pages/about/about.component';
import { HomeComponent } from './showcase/pages/home/home.component';
import { NotFoundComponent } from './showcase/pages/404/404.component';
import { PrivacyPolicyComponent } from './showcase/pages/privacy-policy/privacy-policy.component';
import { TourListComponent } from './tour/pages/tour-list/tour-list.component';
import { TourDetailComponent } from './tour/pages/tour-detail/tour-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'tours', component: TourListComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: ':url', component: TourDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
