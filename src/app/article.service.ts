import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from './interfaces/iarticle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

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

    show(id: any) {
      let url:string = 'http://127.0.0.1:8000/api/articles/';
      return this.http.get<IArticle>(url+id);
    }

    update(id: number, body: any) {
      let url:string = 'http://127.0.0.1:8000/api/articles/';
      const headers = new HttpHeaders({'Content-Type': 'application/merge-patch+json'});
    
      return this.http.patch<IArticle>(url+ id, body, { headers });
    }

    delete(id: number) {
      let url:string = 'http://127.0.0.1:8000/api/articles/';
      return this.http.delete<IArticle>(url+id);
    }

    getModalData(): Observable<IArticle | null> {
      return of(this.modalData);
    }

    setModalData(article: IArticle) {
      this.modalData = article;
    }

    showModalArticle = false;

    findById(id: number): IArticle | undefined {

      let article = this.articles.find(e => e.id === id);
      return article;
    }
}
