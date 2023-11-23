import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { IOrder } from '../interfaces/iorder';
import { SelectionService } from '../selection.service';

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
    private orderService: OrderService,
    private selectionService: SelectionService
  ) {}

  public paymentForm: FormGroup = new FormGroup({
    userId: new FormControl(''),
    payment: new FormControl('',[Validators.required]),
    createdDate: new FormControl(''),
    retrievalDate: new FormControl(''),
    depositDate: new FormControl(''),
    totalPrice: new FormControl(''),
    isAssigned: new FormControl(''),
    isDone: new FormControl(''),
    selection: new FormControl(''),
  });

  handleSubmit() {
    if (this.paymentForm.valid) {
      let userId = this.authService.getUserId();
      const orderKey = 'order_' + userId;
      const currentData:any = this.localStorageService.getData(orderKey);
      
      if(currentData) {
        console.log(currentData[0].Articles);
        const orderData: IOrder = {
          userId: "http://localhost:8000/api/users/"+this.authService.getUserId(),
          createdDate: new Date(Date.now()),
          depositDate: new Date(currentData.depositDate) ,
          retrievalDate: new Date(currentData.retrievalDate) ,
          totalPrice: parseFloat(currentData[0].totalPrice),
          paymentType: this.paymentForm.value.payment,
          selectionJson: currentData[0].Articles,
        }
        console.log(orderData);
        
        this.orderService.add(orderData).subscribe((response) => {
          console.log('La commande a été effectuée', response);
        });
        
      }
    }


    

  }
}
