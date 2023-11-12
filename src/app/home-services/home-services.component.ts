import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

import { IService } from '../interfaces/iservice';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.css']
})
export class HomeServicesComponent implements OnInit {

  services: IService[] = [];
  
  constructor(private servicesService: ServicesService) {}
  ngOnInit(): void {
    this.getServices();
  }

  

  getServices() {
    this.servicesService.findAll().subscribe((data: IService[]) => {
      this.services = data;
    });
  }


}
