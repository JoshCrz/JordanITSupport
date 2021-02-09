import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  servicePoints: any;

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.servicePoints = this.utilityService.getSellingServices();
    console.log('sellingpoints')
    console.log(this.servicePoints)
  }
}
