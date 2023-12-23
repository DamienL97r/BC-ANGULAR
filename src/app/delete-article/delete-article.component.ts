import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent {

  constructor (private service: ArticleService, private route: ActivatedRoute, private router: Router) {}

  public deleteArticle:FormGroup = new FormGroup({
  })

  onSubmit() {
    if (this.deleteArticle.valid) {
      let id = this.route.snapshot.paramMap.get('id');
      let articleId = id ? +id : null;

      if (articleId !== null) {
        this.service.delete(articleId).subscribe(response => {
          console.log('Un article a été supprimé', response);});
      }
      
    }
        
        this.router.navigate(['/admin/articles']);
  }
}
