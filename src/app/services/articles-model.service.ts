import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesModelService {

  currentItem
  articlesToShow
  observableArticles
  apiArticles = []
  myArticles = []
  isManually:boolean = false
  filter:string

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
        this.addApiArticles(result.articles);
    })
    .catch((error) => {
        throw error;
    })
  }

  updateArticlesToShowArray() {
    this.articlesToShow = this.apiArticles.concat(this.myArticles);
    if (this.isManually) {
      this.articlesToShow = this.myArticles;
    }
    if (this.filter) {
      this.articlesToShow = this.articlesToShow.filter((el) => {
        return el.title == this.filter;
      });
    }
    this.eventChange();
  }

  addApiArticles(articles) {
    this.apiArticles = articles;
    this.updateArticlesToShowArray();
  }

  addNewArticle(item) {
    item.manuallyAdded = true;
    this.myArticles.push(item);
    this.updateArticlesToShowArray();
  }

  changeArticle(item) {
    item.manuallyAdded = true;
    let index = this.myArticles.indexOf(this.currentItem);

    this.myArticles[index] = item;
    this.currentItem = null;
    this.updateArticlesToShowArray();
  }

  delete(item) {
    let newArray = this.myArticles.filter((el) => {
      return el !== item;
    })

    this.myArticles = newArray;
    this.updateArticlesToShowArray();
  }

  isExclusiveByTitle(item) {
    let exclusive = this.myArticles.filter((el) => {
      return el.title == item.title;
    });
    return !exclusive.length;
  }

  eventChange() {
    this.observableArticles.next(this.articlesToShow);
  }

  constructor() {
    this.articlesToShow = new Array<[]>()
    this.observableArticles = new BehaviorSubject<[]>(this.articlesToShow);
  }
}
