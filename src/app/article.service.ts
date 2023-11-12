import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from './interfaces/iarticle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

    // Modal form article

    
    articles: IArticle[] = [];
    private modalData: IArticle | null = null;

    findAll() {
      let url:string = 'http://127.0.0.1:8000/api/articles';
      return this.http.get<IArticle[]>(url);
    }

    create(newArticle: IArticle) {
      let url:string = 'http://127.0.0.1:8000/api/articles';
      return this.http.post<IArticle>(url, newArticle);
    }

    findById(id: number): IArticle | undefined {

      let article = this.articles.find(e => e.id === id);
      return article;
    }

    getModalData(): Observable<IArticle | null> {
      return of(this.modalData);
    }

    setModalData(article: IArticle) {
      this.modalData = article;
    }

    showModalArticle = false;
}
