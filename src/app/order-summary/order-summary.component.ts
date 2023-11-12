import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent  implements OnInit, OnDestroy {

  orderData:any = [];
  constructor (public authService: AuthService, private router: Router, private localStorageService: LocalStorageService) {}

  ngOnDestroy(): void {
  }


  ngOnInit(): void {
    let userId = this.authService.getUserId();
    const OrderKey = 'order_' + userId;
    this.orderData = this.localStorageService.getData(OrderKey);
  }



  resetOrder() {
    let userId = this.authService.getUserId();
    const OrderKey = 'order_' + userId;
    localStorage.removeItem(OrderKey);
    this.router.navigate(['/depot-articles']);
  }
}
