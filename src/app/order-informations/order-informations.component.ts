import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  // Définition du formulaire avec les contraintes de validation
  public dateInfoForm: FormGroup = new FormGroup({
    orderData: new FormControl(''),
    depositDate: new FormControl('', [Validators.required, this.validateDepositDate.bind(this)]),
    retrievalDate: new FormControl('', [Validators.required, this.validateRetrievalDate.bind(this)]),
    createdDate: new FormControl('')
  });

  // Méthode de validation pour la date de dépôt
  validateDepositDate(control: FormControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      return { 'invalidDepositDate': true };
    }
    return null;
  }

  validateRetrievalDate(control: FormControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const depositDateControl = this.dateInfoForm?.get('depositDate'); // Utilisation de l'opérateur de navigation sécurisé (?)
    const depositDate = depositDateControl ? new Date(depositDateControl.value) : new Date();
    const minRetrievalDate = new Date(depositDate.setDate(depositDate.getDate() + 2)); // Ajoute 2 jours à la date de dépôt
    if (selectedDate <= minRetrievalDate) {
      return { 'invalidRetrievalDate': true };
    }
    return null;
  }

  // Méthode appelée lors de la soumission du formulaire
  handleSubmit() {
    if (this.dateInfoForm.valid) {
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
  
        // Rediriger l'utilisateur vers la page de récapitulatif de commande
        this.router.navigate(['/paiement']);
      }
    }
  }
}
