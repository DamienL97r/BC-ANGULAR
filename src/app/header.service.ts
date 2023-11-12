import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  // Modal responsive navigation

  showModalNav = false;

  // Scroll event handler

  public initDesktopNavbar() {
    const navbar = document.querySelector('nav') as HTMLElement;
    const iconBasket = document.getElementById('icon-basket') as HTMLImageElement;
    const iconProfil = document.getElementById('icon-profil') as HTMLImageElement;
    const iconLogo = document.getElementById('logo-img-desktop') as HTMLImageElement;

    if (window.scrollY > 80) {
      navbar.classList.add('nav-scrolled');

      // Mettre à jour la source de l'image pour la version lors du scroll
      iconBasket.src = './assets/INC/IMG/Icones/panier-black.png';
      iconProfil.src = './assets/INC/IMG/Icones/profil-black.png';
      iconLogo.src = './assets/INC/IMG/Logo/logo-dark.png';
    } else {
      navbar.classList.remove('nav-scrolled');

      // Mettre à jour la source de l'image pour la version par défaut
      iconBasket.src = './assets/INC/IMG/Icones/panier.png';
      iconProfil.src = './assets/INC/IMG/Icones/profil.png';
      iconLogo.src = './assets/INC/IMG/Logo/logo-light.png';
    }
  }

  public initResponsiveNavbar() {
    const navbar = document.querySelector('.resp-nav') as HTMLElement;
    const iconBurgerMenu = document.getElementById('icon-burger-menu') as HTMLImageElement;
    const iconLogoResp = document.getElementById('logo-img-resp') as HTMLImageElement;
    const iconLogoTitle = document.getElementById('logo-title') as HTMLImageElement;

    if (window.scrollY > 0) {
      navbar.classList.add('resp-nav-scrolled');

      // Mettre à jour la source de l'image pour la version lors du scroll
      iconBurgerMenu.src = './assets/INC/IMG/Icones/menu-burger-blue-gradient.png';
      iconLogoResp.src = './assets/INC/IMG/Logo/logo-dark.png';
      iconLogoTitle.src = './assets/INC/IMG/Logo/logo-title-black.png';
    } else {
      navbar.classList.remove('resp-nav-scrolled');

      // Mettre à jour la source de l'image pour la version par défaut
      iconBurgerMenu.src = './assets/INC/IMG/Icones/menu-burger-white.png';
      iconLogoResp.src = './assets/INC/IMG/Logo/logo-light.png';
      iconLogoTitle.src = './assets/INC/IMG/Logo/logo-title-white.png';
    }
  }
}
