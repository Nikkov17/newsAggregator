import { Component, OnInit } from '@angular/core';
import { ArticlesModelService } from '../articles-model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  title = "type title..."
  text = "type content..."
  image = "type image url..."
  url = "type article url..."
  valueTitle
  valueText
  valueImage
  valueUrl

  constructor(private ArticlesModelService: ArticlesModelService, private router: Router) { }

  onSubmit($event) {
    let newArticle = {
      title: $event.target[0].value,
      text: $event.target[1].value,
      image: $event.target[2].value,
      url: $event.target[3].value
    };

    if (newArticle.title && newArticle.text) {
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
      this.valueText = this.ArticlesModelService.currentItem.text;
      this.valueImage = this.ArticlesModelService.currentItem.image;
      this.valueUrl = this.ArticlesModelService.currentItem.url;
    }
  }

}
