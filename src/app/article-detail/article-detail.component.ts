import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../interfaces/iarticle';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit{

  constructor (private service: ArticleService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getArticle();
  }

  article: IArticle = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
  }

  getArticle() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.show(id).subscribe((data: IArticle) => {
      this.article = data;
    })
  }

}




















