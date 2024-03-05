import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {

  constructor( private service: ArticleService, private router: Router) {}

  public createArticle:FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl('',[Validators.required, Validators.min(0.01)]),
    description: new FormControl('')
  })



  onSubmit() {
    if (this.createArticle.valid) {
      console.log("Success");
      console.log(this.createArticle.value);

      this.service.create(this.createArticle.value).subscribe();
    }

        // Réinitialiser le formulaire
        this.createArticle.reset();
        
        this.router.navigate(['/admin/articles']);
  }
}
