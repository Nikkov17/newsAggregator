import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesModelService {

  currentItem
  articlesArray
  observableArticles

  sendFetch(value) {
    let result;
    const url = `https://newsapi.org/v2/top-headlines?` +
    `sources=${value}&` +
    `apiKey=b1489445b9fb4d2b98dbf211c114989b`;

    return fetch(url)
    .then((response) => {
        result = response.json();
        return result;
    })
    .then((result) => {
        this.setArticles(result.articles);
    })
    .catch((error) => {
        throw error;
    })
  }

  setArticles(articles) {
    this.articlesArray = this.articlesArray.concat(articles);
    this.eventChange();
  }

  getArticles() {
    return this.articlesArray;
  }

  addNewArticle(item) {
    this.articlesArray.push(item);
    this.eventChange();
  }

  changeArticle(item) {
    let index = this.articlesArray.indexOf(this.currentItem);

    this.articlesArray[index] = item;
    this.eventChange();
    this.currentItem = null;
  }

  delete(item) {
    let newArray = this.articlesArray.filter((el) => {
      return el !== item;
    })

    this.articlesArray = newArray;
    this.eventChange();
  }

  isExclusiveByTitle(item) {
    let exclusive = this.articlesArray.filter((el) => {
      return el.title == item.title;
    });
    return !exclusive.length;
  }

  eventChange() {
    this.observableArticles.next(this.articlesArray);
  }

  constructor() {
    this.articlesArray= new Array<[]>()
    this.observableArticles= new BehaviorSubject<[]>(this.articlesArray);
  }
}
