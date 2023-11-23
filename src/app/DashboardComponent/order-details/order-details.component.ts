import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/interfaces/iorder';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor (private service: OrderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getOrder();
  }

  

  order: IOrder = {
    userId: '',
    createdDate: new Date,
    depositDate: new Date,
    retrievalDate: new Date,
    totalPrice: 0,
    paymentType: '',
  };

  getOrder() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.findOneById(id).subscribe((data: IOrder) => {
      this.order = data;
    })
  }
}
