import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Subscription } from 'rxjs';
import { IArticle } from '../interfaces/iarticle';

@Component({
  selector: 'app-depot-articles-container-articles',
  templateUrl: './depot-articles-container-articles.component.html',
  styleUrls: ['./depot-articles-container-articles.component.css']
})
export class DepotArticlesContainerArticlesComponent implements OnInit {

  constructor (public articleService: ArticleService) {}

  

  ngOnInit(): void {
    this.getArticles();
  }

  public dataSubsribtion: Subscription | undefined ;
  articles: IArticle[] = [];

  sendProductDataToService(article: IArticle) {
    this.articleService.setModalData(article);
    this.articleService.showModalArticle = true; // Déclenche l'ouverture de la modal après avoir défini les données de l'article
  }

  getArticles(){
    this.dataSubsribtion = this.articleService.findAll().subscribe((data: IArticle[]) => {
      this.articles = data;
    })
  }
}
