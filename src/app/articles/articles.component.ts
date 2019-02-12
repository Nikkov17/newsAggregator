import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articlesArray = [{
    title: 'article1',
    text: 'text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1 text of article 1',
    url: 'url',
    image: 'https://timedotcom.files.wordpress.com/2015/07/earth-blue-marble-2002.jpg'
  }]

  constructor() { }

  ngOnInit() {
  }

}
