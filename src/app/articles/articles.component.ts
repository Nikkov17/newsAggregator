import { Component, OnInit } from '@angular/core';
import { ArticlesModelService } from '../articles-model.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private ArticlesModelService: ArticlesModelService) { }

  articles: any[];

  ngOnInit() {
    this.articles = this.ArticlesModelService.getArticles();
  }

}
