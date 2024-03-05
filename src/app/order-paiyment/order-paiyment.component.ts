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
    isAssigned: new FormControl(0),
    isDone: new FormControl(0),
    selection: new FormControl(''),
  });

  handlePaymentChange(event: Event) {
    const paymentMethod = (event.target as HTMLSelectElement).value;
    const container = document.querySelector('.container');
    const containerForm = document.querySelector('.paymentForm');
    if (container && containerForm) {
        if (paymentMethod === 'en ligne') {
            container.classList.add('payment-online');
            containerForm.classList.add('paymentForm-online');
        } else {
            container.classList.remove('payment-online');
            containerForm.classList.remove('paymentForm-online');
        }
    }
  }

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
          isAssigned: false,
          isDone: false,
          selectionJson: currentData[0].Articles,
        }
        this.orderService.add(orderData).subscribe();
      }
    }
    let userId = this.authService.getUserId();
    const userBasketKey = 'basketItems_' + userId;
    localStorage.removeItem(userBasketKey);
    const orderKey = 'order_' + userId;
    localStorage.removeItem(orderKey);
    this.router.navigate(['/']); // Rediriger le user vers la page d'accueil
  }
}
