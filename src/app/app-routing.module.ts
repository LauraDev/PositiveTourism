import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/404/404.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TourListComponent } from './pages/tour/tour-list/tour-list.component';
import { TourDetailComponent } from './pages/tour/tour-detail/tour-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'tours', component: TourListComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: ':url', component: TourDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'not-found', component: NotFoundComponent },
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
