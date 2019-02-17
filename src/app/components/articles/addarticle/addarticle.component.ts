import { Component, OnInit } from '@angular/core';
import { ArticlesModelService } from '../../../services/articles-model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  title = "type title..."
  Content = "type content..."
  Description = "type description..."
  urlToImage = "type image url..."
  url = "type article url..."
  valueTitle
  valueContent
  valueDescription
  valueurlToImage
  valueUrl

  constructor(private ArticlesModelService: ArticlesModelService, private router: Router) { }

  onSubmit($event) {
    $event.preventDefault();
    let newArticle = {
      title: $event.target[0].value,
      content: $event.target[1].value,
      description: $event.target[2].value,
      urlToImage: $event.target[3].value,
      url: $event.target[4].value
    };

    if (newArticle.title && (newArticle.content || newArticle.description)) {
      if (this.ArticlesModelService.currentItem) {
        this.ArticlesModelService.changeArticle(newArticle);
        this.router.navigate(['']);
      } else if (this.ArticlesModelService.isExclusiveByTitle(newArticle)) {
        this.ArticlesModelService.addNewArticle(newArticle);
        this.router.navigate(['']);
      }
    }
  }

  ngOnInit() {
    if (this.ArticlesModelService.currentItem) {
      this.valueTitle = this.ArticlesModelService.currentItem.title;
      this.valueContent = this.ArticlesModelService.currentItem.content;
      this.valueDescription = this.ArticlesModelService.currentItem.description;
      this.valueurlToImage = this.ArticlesModelService.currentItem.urlToImage;
      this.valueUrl = this.ArticlesModelService.currentItem.url;
    }
  }

}
