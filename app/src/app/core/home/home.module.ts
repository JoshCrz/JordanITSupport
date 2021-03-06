import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { EnquiryMiniModule } from 'src/app/shared/modules/enquiry-mini/enquiry-mini.module';
import { SellingPointsModule } from 'src/app/shared/modules/selling-points/selling-points.module';
import { AboutModule } from 'src/app/shared/modules/about/about.module';
import { ServicesModule } from 'src/app/shared/modules/services/services.module';
import { TestimonialsModule } from 'src/app/shared/modules/testimonials/testimonials.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EnquiryMiniModule,
    SellingPointsModule,
    AboutModule,
    ServicesModule,
    TestimonialsModule
  ]
})
export class HomeModule { }
