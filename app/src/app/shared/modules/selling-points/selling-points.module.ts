import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellingPointsComponent } from './selling-points.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SellingPointsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [SellingPointsComponent]
})
export class SellingPointsModule { }
