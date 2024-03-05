import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { IArticle } from '../interfaces/iarticle';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { IService } from '../interfaces/iservice';
import { LocalStorageService } from '../local-storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-depot-articles-modal',
  templateUrl: './depot-articles-modal.component.html',
  styleUrls: ['./depot-articles-modal.component.css']
})
export class DepotArticlesModalComponent implements OnInit {
  article: IArticle | null = null;
  services: IService[] = [];
  selectedServices: { service: IService, selected: boolean }[] = [];


  constructor(public articleService: ArticleService, public serviceService: ServicesService, private localStorageService: LocalStorageService, public authService: AuthService) {}
  ngOnInit(): void {
    this.getData();
    this.getServices();
  }

  getData() {
    this.articleService.getModalData().subscribe((data) => {
      this.article = data;
    });
  }

  getServices() {
    this.serviceService.findAll().subscribe((data: IService[]) => {
      this.services = data;
      
      // Initialisez le tableau selectedServices avec chaque service ayant un état de sélection initial à "false"
      this.selectedServices = data.map((service) => ({ service, selected: false }));
    });
  }

  public selectionForm:FormGroup = new FormGroup({
    articleData: new FormControl(''),

    quantity: new FormControl('1'),
    message: new FormControl(''),
    services: new FormControl(''),
    itemTotalPrice: new FormControl(''),
  })

  selectService(service: IService) {
    const selectedService = this.selectedServices.find((s) => s.service.id === service.id);
    
    if (selectedService) {
      selectedService.selected = !selectedService.selected;
    }
  }


  calculateTotalPrice(): string {
    this.getData();
    
    let basePrice = this.article?.price  || 0;
    let totalPrice = basePrice * this.selectionForm.value.quantity;
    
  
    // Ajouter le prix des services sélectionnés
    const selectedServices = this.selectedServices.filter((s) => s.selected);
    for (const service of selectedServices) {
      totalPrice += service.service.price;
    }
    
      // Utilisez toFixed() pour formater le prix
  const formattedPrice = totalPrice.toFixed(2);

  return formattedPrice;
  }

  onSubmit() {
    let userId = this.authService.getUserId();

    this.getData();
    let metaDataArticle = {
      id: this.article?.id || null,
      name: this.article?.name || null,
      price: this.article?.price || null
    };
    let priceSelection = this.calculateTotalPrice();

    // Filtrer les services sélectionnés
    const selectedServices = this.selectedServices.filter((s) => s.selected).map((s) => s.service);
    
    // Initialise l'articleData avec un objet contenant les métadonnées de l'article et les services sélectionnés, et le prix
    this.selectionForm.patchValue({articleData: metaDataArticle, services: selectedServices, itemTotalPrice: priceSelection});

    // Récupérez les données du formulaire
    const formData = this.selectionForm.value;

    // Sauvegarder les données dans le localStorage
    const userBasketKey = 'basketItems_' + userId;
    this.localStorageService.saveData(userBasketKey, formData);

    this.selectionForm.reset();
    this.articleService.showModalArticle = false;
    window.location.reload();
  }
}
