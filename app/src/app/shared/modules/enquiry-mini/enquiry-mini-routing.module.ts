import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryMiniComponent } from './enquiry-mini.component';
 
const routes: Routes = [
  {
    path: '',
    component: EnquiryMiniComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryMiniRoutingModule { }
