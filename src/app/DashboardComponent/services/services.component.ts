import { Component } from '@angular/core';
import { IService } from 'src/app/interfaces/iservice';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor (private service: ServicesService) {}
  ngOnInit(): void {
    this.getServices();
  }

  services: IService[] = [];

  getServices() {
    this.service.findAll().subscribe((data: IService[]) => {
      this.services = data;
    })
  }
}
