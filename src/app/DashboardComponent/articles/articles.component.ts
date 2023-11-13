import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  public createArticle:FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl('',[Validators.required, Validators.min(0.01)]),
    description: new FormControl(''),
  })



  onSubmit() {
    if (this.createArticle.valid) {
      console.log("Success");
      console.log(this.createArticle.value);

      this.service.create(this.createArticle.value).subscribe(response => {
        console.log('Un article a été ajouté avec succès:', response);});
    }

        // Réinitialiser le formulaire
        this.createArticle.reset();
        
        // Redirection : this.route.navigate(['/']);
  }
}
