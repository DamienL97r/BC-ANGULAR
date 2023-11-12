import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToken, IUser } from './interfaces/iuser';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  currentUser: IUser | null = null;
  url = "http://localhost:8000/api"

  add(user:IUser){
    return this.http.post<IUser>(this.url+'/users', user);
  }

  login(credentials:any):Observable<IToken>{
    return this.http.post<IToken>(this.url+'/login', credentials);
  }

  saveToken(token:string){
    localStorage.setItem('token', token);
    window.location.reload();
  }

  getToken(){
    return localStorage.getItem('token');
  }


  isLogged():boolean{
    const token = localStorage.getItem('token');
    return !! token;
  }

  removeToken() {
    localStorage.removeItem("token");
    window.location.reload();
  }


  getUserData() {
    const token = this.getToken();

    if (token) {
      const tokenPayload: any = jwtDecode(token);
      const userData = tokenPayload;
      return userData;
    }
  }

  getUserId() {
    const token = this.getToken();

    if (token) {
      const tokenPayload: any = jwtDecode(token);
      const userId = tokenPayload.id;
      return userId;
    }
  }

  getRole() {
    const token = this.getToken();

    if (token) {
      const tokenPayload: any = jwtDecode(token);
      const userRole = tokenPayload.roles;
      return userRole;
    }
  }

  findById(): Observable<IUser>{
    return this.http.get<IUser>(this.url+'/users/'+this.getUserId());
  }



  // Vérifier si l'utilisateur est admin

  isAdmin(): boolean {
    const userRoles = this.getRole();
    console.log(userRoles);
    
    
    if (userRoles && Array.isArray(userRoles)) {
      const isAdmin = userRoles.includes('ROLE_ADMIN');
  
      if (isAdmin) {
        console.log('role : ADMIN');
      } else {
        console.log('role : USER');
      }
  
      return isAdmin;
    } else {
      console.log('role : VISITOR');
      return false;
    }
  }
}
