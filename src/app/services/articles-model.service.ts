import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesModelService {

  currentItem

  articlesArray = []

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
  }

  getArticles() {
    return this.articlesArray;
  }

  addNewArticle(item) {
    this.articlesArray.push(item);
  }

  changeArticle(item) {
    let index = this.articlesArray.indexOf(this.currentItem);

    this.articlesArray[index] = item;
    this.currentItem = null;
  }

  isExclusiveByTitle(item) {
    let exclusive = this.articlesArray.filter((el) => {
      return el.title == item.title;
    });
    return !exclusive.length;
  }
  constructor() { }
}
