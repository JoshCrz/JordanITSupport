import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faRocket, faScrewdriver, faHeadset, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Injectable({ 
  providedIn: 'root'
})
export class UtilityService {

  faRocket = faRocket;
  faScrewdriver = faScrewdriver;
  faHeadset = faHeadset;
  faLaptopCode = faLaptopCode;
  
  services: any = [];
  reviews: any = [];

  date: Date = new Date();

  constructor() {
    this.services = [
      {
        id: 1,
        title: 'IT Consultation',
        name: 'IT Consultation and Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: this.faRocket
      },
      {
        id: 2,
        title: 'PC Building',
        name: 'PC Building, Repair and Maintenance',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: this.faScrewdriver
      },
      {
        id: 3,
        title: 'General IT Support',
        name: 'General IT Support, Advice and Guidance',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: this.faHeadset
      },
      {
        id: 4,
        title: 'Bespoke Websites',
        name: 'Bespoke Websites and Software',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: this.faLaptopCode
      }
    ]

    this.reviews = [
      {
        content: "Professional and helpful service",
        name: "Sean",
        date: this.date.getTime(),
        stars: 5
      },
      {
        content: "Helpful and insightful support provided!",
        name: "Jess",
        date: this.date.getTime(),
        stars: 5
      }
    ]

  }

  getReviews = () => {
    return this.reviews;
  }


  getSellingServices = () => {
    //return config selling services
    return this.services;
  }

}
