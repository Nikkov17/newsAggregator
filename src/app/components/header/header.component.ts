import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesModelService } from '../../services/articles-model.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  select = {
    sourcesArray: ['abc-news', 'bbc-news', 'ansa', 'bbc-sport', 'bloomberg'],
    placeholder: 'choose source'
  }

  login = 'login'

  ChoosenSource = 'Choosen source'

  redirectHome($event) {
    this.router.navigate(['']);
  }

  addArticleButton($event) {
    $event.preventDefault();
    this.router.navigate(['addarticle']);
  }
  
  filterFormSubmit($event) {
    $event.preventDefault();
    this.ArticlesModelService.filter = $event.target[0].value;
    this.ArticlesModelService.updateArticlesToShowArray();
  }

  onSelectChange(value) {
    this.ArticlesModelService.sendFetch(value);
    this.ChoosenSource = value;
  }

  constructor(private router: Router, private ArticlesModelService: ArticlesModelService) {}

  ngOnInit() {}

}
