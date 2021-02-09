import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  reviews: any;

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {

    this.reviews = this.utilityService.getReviews();

  }

}
