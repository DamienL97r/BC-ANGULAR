import { Component, HostListener } from '@angular/core';
import { HeaderService } from '../header.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent{

  constructor (public headerService: HeaderService, private authService: AuthService, private router: Router) {}
  
  


  isDesktopNavbarScrolled: boolean = false;
  isResponsiveNavbarScrolled: boolean = false;
  isLogged: boolean = this.authService.isLogged();
  isAdmin: boolean | null = this.authService.isAdmin();
  itemBasketCounter: number | undefined = 0;

  // Écouteur d'événement pour le scroll
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isDesktopNavbarScrolled = window.scrollY > 80;
    this.isResponsiveNavbarScrolled = window.scrollY > 0;
    
    this.headerService.initDesktopNavbar();
    this.headerService.initResponsiveNavbar();
  }


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



}


