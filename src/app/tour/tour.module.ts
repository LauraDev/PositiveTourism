import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TourDetailComponent } from './pages/tour-detail/tour-detail.component';
import { TourListComponent } from './pages/tour-list/tour-list.component';
import { TourOverviewComponent } from './components/tour-overview/tour-overview.component';
import { TourProgramComponent } from './components/tour-program/tour-program.component';
import { UiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    UiModule
  ],
  declarations: [
    ContactComponent,
    TourOverviewComponent,
    TourDetailComponent,
    TourListComponent,
    TourProgramComponent
  ],
  exports: [
    ContactComponent,
    TourOverviewComponent,
    TourProgramComponent
  ]

})

export class TourModule {}
