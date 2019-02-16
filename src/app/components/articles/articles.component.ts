import { Component, OnInit } from '@angular/core';
import { ArticlesModelService } from '../../services/articles-model.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private ArticlesModelService: ArticlesModelService) { }

  articles: any[];

  ngOnInit() {
    this.ArticlesModelService.currentItem = null;
    this.articles = this.ArticlesModelService.getArticles();
  }

}
