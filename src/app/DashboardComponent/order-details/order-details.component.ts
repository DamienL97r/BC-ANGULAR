import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { IOrder } from 'src/app/interfaces/iorder';
import { IUser } from 'src/app/interfaces/iuser';
import { OrderService } from 'src/app/order.service';
import { SelectionService } from 'src/app/selection.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor (private service: OrderService, private route: ActivatedRoute, private userService: AuthService, private selectionService: SelectionService) {
  }

  ngOnInit(): void {
    this.getOrder();
    this.getUser();
  }

  users: IUser[] = [];

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
  getUser() {
    this.userService.findAll().subscribe((data: IUser[]) => {
      this.users = data;
    })
  }

  public assignForm: FormGroup = new FormGroup({
    employee: new FormControl(''),
  });

  assignOrder() {
    console.log( this.getOrder);
    
    console.log(this.assignForm.value)
  }
}
