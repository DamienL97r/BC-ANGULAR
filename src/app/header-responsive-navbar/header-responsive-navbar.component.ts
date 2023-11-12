import { Component, HostListener } from '@angular/core';
import { HeaderService } from '../header.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-responsive-navbar',
  templateUrl: './header-responsive-navbar.component.html',
  styleUrls: ['./header-responsive-navbar.component.css']
})
export class HeaderResponsiveNavbarComponent {

  constructor(public headerService: HeaderService, private authService: AuthService, private router: Router) {}

  isLogged: boolean = this.authService.isLogged();
  isAdmin: boolean | null = this.authService.isAdmin();
  itemBasketCounter: number | undefined = 0;

  countItemInBasket() {
    let userId = this.authService.getUserId();
    const userBasketKey = 'basketItems_' + userId;
    const basketItemsString = localStorage.getItem(userBasketKey);
    if (basketItemsString) {
        const basketItemsArray = JSON.parse(basketItemsString);
        this.itemBasketCounter = basketItemsArray.length;
    } else {
        this.itemBasketCounter = 0;
    }

    return this.itemBasketCounter;
}

  seeBasket() {
    if (this.itemBasketCounter === 0 ) {
      this.router.navigate(['/depot-articles']);
    } else {
      this.router.navigate(['/recapitulatif-de-commande']);
    }
  }


  logoutResponsive() {
    this.authService.removeToken();
  }

}
