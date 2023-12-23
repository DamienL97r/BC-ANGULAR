import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit{

    constructor (private authService: AuthService) {}

    isSuperAdmin: boolean | null = this.authService.isSuperAdmin();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
