import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TestimonialsComponent],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports: [TestimonialsComponent]
})
export class TestimonialsModule { }
