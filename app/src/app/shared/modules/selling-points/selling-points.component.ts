import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-selling-points',
  templateUrl: './selling-points.component.html',
  styleUrls: ['./selling-points.component.css']
})
export class SellingPointsComponent implements OnInit {

  sellingPoints: any;
  
  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.sellingPoints = this.utilityService.getSellingServices();
    console.log('sellingpoints')
    console.log(this.sellingPoints)
  }

}
