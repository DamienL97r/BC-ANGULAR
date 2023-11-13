import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { IOrder } from '../interfaces/iorder';

@Component({
  selector: 'app-order-paiyment',
  templateUrl: './order-paiyment.component.html',
  styleUrls: ['./order-paiyment.component.css']
})
export class OrderPaiymentComponent {

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private orderService: OrderService
  ) {}

  public paymentForm: FormGroup = new FormGroup({
    userId: new FormControl(''),
    payment: new FormControl('',[Validators.required]),
    createdDate: new FormControl(''),
    retrievalDate: new FormControl(''),
    depositDate: new FormControl(''),
    totalPrice: new FormControl(''),
  });

  handleSubmit() {
    if (this.paymentForm.valid) {
      let userId = this.authService.getUserId();
      const orderKey = 'order_' + userId;
      const currentData:any = this.localStorageService.getData(orderKey);
  
      console.log(currentData[0].Articles);
      
      if(currentData) {
        const orderData: IOrder = {
          userId: "http://localhost:8000/api/users/"+this.authService.getUserId(),
          createdDate: new Date(Date.now()),
          depositDate: new Date(currentData.depositDate) ,
          retrievalDate: new Date(currentData.retrievalDate) ,
          totalPrice: parseFloat(currentData[0].totalPrice),
          paymentType: this.paymentForm.value.payment,
        }
          
        this.orderService.add(orderData).subscribe((response) => {
          console.log('La commande a été effectuée', response);
        });
          
      }
    }


    

  }
}
