
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  saveData(key: string, data: any) {
    const existingData = this.getData(key);
    const newData = existingData ? [...existingData, data] : [data];
    localStorage.setItem(key, JSON.stringify(newData));
  }

  getData(key: string): any[] {

    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  setData(key: string, data: any[]) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
