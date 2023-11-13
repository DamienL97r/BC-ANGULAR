import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces/iorder';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  constructor (private service: OrderService) {}
  ngOnInit(): void {
    this.getOrders();
  }

  orders: IOrder[] = [];

  getOrders() {
    this.service.findAll().subscribe((data: IOrder[]) => {
      this.orders = data;
    })
  }
}
