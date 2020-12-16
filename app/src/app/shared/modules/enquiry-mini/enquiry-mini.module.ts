import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryMiniComponent } from './enquiry-mini.component';

import { EnquiryMiniRoutingModule } from './enquiry-mini-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
  
@NgModule({
  entryComponents: [EnquiryMiniComponent],
  declarations: [EnquiryMiniComponent],
  imports: [
    CommonModule,
    EnquiryMiniRoutingModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    EnquiryMiniComponent
  ]
})
export class EnquiryMiniModule { }
