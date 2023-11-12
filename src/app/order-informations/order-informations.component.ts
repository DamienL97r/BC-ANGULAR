import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-informations',
  templateUrl: './order-informations.component.html',
  styleUrls: ['./order-informations.component.css']
})
export class OrderInformationsComponent {

constructor(private authService: AuthService, private localStorageService: LocalStorageService, private router: Router) {}


  public dateInfoForm:FormGroup = new FormGroup({
    orderData: new FormControl(''),
    depositDate: new FormControl(''),
    retrievalDate: new FormControl(''),
    createdDate: new FormControl(''),
    })

  handleSubmit() {
    let userId = this.authService.getUserId();
    const OrderKey = 'order_' + userId;
    const currentData = this.localStorageService.getData(OrderKey);
    
    if (currentData) {
      const updatedData = {
        ...currentData,
        depositDate: new Date(this.dateInfoForm.value.depositDate).toString(),
        retrievalDate: new Date(this.dateInfoForm.value.retrievalDate).toString(),
      };

      this.localStorageService.setData(OrderKey, updatedData);

       // Rediriger le user vers la page de récap de la commande
      this.router.navigate(['/paiement']);
    }
  }
}
