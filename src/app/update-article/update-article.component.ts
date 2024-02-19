import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle } from '../interfaces/iarticle';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  constructor( private service: ArticleService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.updateArticle = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0.01)]),
      description: new FormControl('')
    });
  }
  
  ngOnInit(): void {
    this.getArticle();
  }

  article: IArticle = {
    id: 0,
    name: '',
    description: '',
    price: 0,
  }

  updateArticle: FormGroup;

  getArticle() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.show(id).subscribe((data: IArticle) => {
      this.article = data;
      this.initializeForm();
    });
  }

  initializeForm() {
    this.updateArticle.patchValue({
      name: this.article.name,
      price: this.article.price,
      description: this.article.description
    });
  }


  onSubmit() {
    if (this.updateArticle.valid) {
      let id = this.route.snapshot.paramMap.get('id');
      let articleId = id ? +id : null;
      console.log("Success");
      console.log(this.updateArticle.value);

      if (articleId !== null) {
        // Utilisez la méthode patchValue pour obtenir uniquement les valeurs modifiées
        const updatedValues = this.updateArticle.getRawValue();
        this.service.update(articleId, updatedValues).subscribe((patchResponse) => {
          console.log('Un article a été mis à jour avec succès:', patchResponse);
        });
      }
      this.router.navigate(['/admin/articles']);
    }
  }
}
