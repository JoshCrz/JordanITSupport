import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

@Injectable({ 
  providedIn: 'root'
})
export class UtilityService {

  faRocket = faRocket;
  services: any = [];
 
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
        icon: typeof faRocket
      },
      {
        id: 3,
        title: 'General IT Support',
        name: 'General IT Support, Advice and Guidance',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: typeof faRocket
      },
      {
        id: 4,
        title: 'Bespoke Websites',
        name: 'Bespoke Websites and Software',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: typeof faRocket
      }
    ]
  }

  getSellingServices = () => {
    //return config selling services
    return this.services;
  }

}
