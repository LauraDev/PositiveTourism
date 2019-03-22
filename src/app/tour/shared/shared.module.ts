import { CommonModule } from '@angular/common';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TourService } from './services/tour.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    TourService
  ],
  exports: [
  ]
})
export class SharedModule {}
