import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from './interfaces/iorder';
import { AuthService } from './auth.service';
import { IUser } from './interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  url:string = "http://localhost:8000/api"

  add(newOrder: IOrder) {
    return this.http.post<IOrder>(this.url+'/orders', newOrder);
  }

  patch(id: number, body: any) {
    // Ajoutez l'en-tête Content-Type à la requête
    const headers = new HttpHeaders({'Content-Type': 'application/merge-patch+json'});
  
    return this.http.patch<IOrder>(this.url + '/orders/' + id, body, { headers });
  }

  findAll() {
    return this.http.get<IOrder[]>("http://localhost:8000/api/orders");
  }

  findOneById(id: any) {
    return this.http.get<IOrder>(this.url+'/orders/'+id);
  }

}
