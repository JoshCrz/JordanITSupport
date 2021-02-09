import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ServicesComponent } from 'src/app/shared/modules/services/services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ServicesComponent]
})
export class ServicesModule { }
