import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';
import { IArticle } from 'src/app/interfaces/iarticle';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  constructor( private service: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  articles: IArticle[] = [];

  getArticles(){
    this.service.findAll().subscribe((data: IArticle[]) => {
      this.articles = data;
    })
  }

  
}

