import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  mySentences:string[] = [
    '111111111111111111111111111111111',
    '222222222222222222222222222222222',
    '333333333333333333333333333333333',
    '444444444444444444444444444444444',
    '555555555555555555555555555555555'
  ];

  sentence:string = "";

  getCarousel() {
    const obs = new Observable((observer:Observer<any>) => {
      let i = this.mySentences.length-1;
      setInterval(() => {
        observer.next(this.mySentences[i]);
        if ( i> 0) {
          i--;
        } else {
          i = this.mySentences.length-1;
        }
      }, 1000)
    })

    const observer = {
      next: (value:string) => this.sentence = value,
      complete:() => console.log('complete'),
      error:(value:string) => console.log('error', value),
    }

    obs.subscribe(observer);

    
    
  }
}
