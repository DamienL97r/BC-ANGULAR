import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor( private service: ArticleService) {}

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
