import { MenuComponent } from './menu/menu.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { FooterComponent } from './footer/footer.component';
import { CheckboxTextComponent } from './checkbox-text/checkbox-text.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSlideshowComponent } from './text-slideshow/text-slideshow.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    CardComponent,
    CheckboxTextComponent,
    FooterComponent,
    ImageSliderComponent,
    MenuComponent,
    TextSlideshowComponent,
  ],
  exports: [
    CardComponent,
    CheckboxTextComponent,
    FooterComponent,
    ImageSliderComponent,
    MenuComponent,
    TextSlideshowComponent,
  ]
})

export class UiModule {}
