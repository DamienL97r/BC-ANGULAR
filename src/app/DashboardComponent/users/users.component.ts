import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { IUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private service: AuthService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  users: IUser[] = [];

  getUsers(){
    this.service.findAll().subscribe((data: IUser[]) => {
      this.users = data;
    })
  }
}
