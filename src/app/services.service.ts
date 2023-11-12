import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IService } from './interfaces/iservice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http: HttpClient) { }

  findAll(){
    let url:string = 'http://127.0.0.1:8000/api/services';
    return this.http.get<IService[]>(url);
  }
}
