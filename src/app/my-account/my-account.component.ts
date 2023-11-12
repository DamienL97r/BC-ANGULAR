import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../interfaces/iuser';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit{

  currentUser: IUser = {
    id: 0,
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    adresse: '',
    roles: '',
  };


  constructor (private authService: AuthService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.authService.findById().subscribe({
      next: (data: IUser) => {
        this.currentUser = data;
        // Vos actions à effectuer une fois les données reçues
      },
      error: (error: any) => {
        // Gestion des erreurs ici
      }
    });
  }



  logout() {
    this.authService.removeToken();
  }
}
