import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ISelection } from 'src/app/interfaces/iselection';
import { IUser } from 'src/app/interfaces/iuser';
import { SelectionService } from 'src/app/selection.service';

@Component({
  selector: 'app-dashboard-my-account',
  templateUrl: './dashboard-my-account.component.html',
  styleUrls: ['./dashboard-my-account.component.css']
})
export class DashboardMyAccountComponent implements OnInit{

  constructor ( private authService: AuthService, private selectionService: SelectionService) {}


  ngOnInit(): void {
    this.getUser();
  }


  currentEmployee: IUser = {
    id: 0,
    email:'',
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    adresse: '',
    roles: '',
    jsonOrder: '',
  };

  getUser() {
    this.authService.findById().subscribe({
      next: (data: IUser) => {
        this.currentEmployee = data;
        
        // Vos actions à effectuer une fois les données reçues
      },
      error: (error: any) => {
        // Gestion des erreurs ici
      }
    });
  }


}
