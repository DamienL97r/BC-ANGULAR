import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CarouselService } from '../carousel.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot-articles-container-basket',
  templateUrl: './depot-articles-container-basket.component.html',
  styleUrls: ['./depot-articles-container-basket.component.css']
})
export class DepotArticlesContainerBasketComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private serviceCarousel: CarouselService, public authService: AuthService, private router: Router) {}

  formData:any = [];
  sentences:any = []; //Ne marche pas

  ngOnInit(): void {
    // Récupérez les données stockées dans le localStorage
    let userId = this.authService.getUserId();
    const userBasketKey = 'basketItems_' + userId;
    this.formData = this.localStorageService.getData(userBasketKey);

    this.sentences = this.sentenceCarousel(); //Ne marche pas

  }

  sentenceCarousel() {
    this.serviceCarousel.getCarousel();  //Ne marche pas
  }


  // Calculer le prix total du panier
  calculateBasketTotalPrice(){
    let totalPrice = 0;
    for (let data of this.formData) {
      totalPrice += parseFloat(data.itemTotalPrice);
    }
    return totalPrice.toFixed(2);
  }

  removeItem(index: number) {
    let userId = this.authService.getUserId();
    const userBasketKey = 'basketItems_' + userId;
    this.formData.splice(index, 1);
    this.localStorageService.setData(userBasketKey, this.formData); // Mise à jour du localStorage
  }

  clearBasket() {
    let userId = this.authService.getUserId();
    const userBasketKey = 'basketItems_' + userId;
    localStorage.removeItem(userBasketKey);
    window.location.reload();
  }

  public orderForm:FormGroup = new FormGroup({
    userId: new FormControl(''),
    totalPrice: new FormControl(''),
    Articles: new FormControl(''),
  })

  onSubmit() {

    //Récupère l'id du user
    let userId = this.authService.getUserId();

    //Récupérer le prix total du panier
    let totalPrice = this.calculateBasketTotalPrice();
    this.orderForm.patchValue({userId: userId, totalPrice: totalPrice, Articles: this.formData});

    console.log(this.orderForm.value, this.formData);

    

    // Sauvegardez les données dans le localStorage
    const OrderKey = 'order_' + userId;
    if (OrderKey) {
      localStorage.removeItem(OrderKey);
    }
    this.localStorageService.saveData(OrderKey, this.orderForm.value);


    // Rediriger le user vers la page de récap de la commande
    this.router.navigate(['/recapitulatif-de-commande']);

  }
}


