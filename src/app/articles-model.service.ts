import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesModelService {

  currentItem

  articlesArray = [
    {
      title: 'news 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      url: '#',
      image: 'https://timedotcom.files.wordpress.com/2015/07/earth-blue-marble-2002.jpg'
    },
    {
      title: 'news 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      url: '#',
      image: 'https://timedotcom.files.wordpress.com/2015/07/earth-blue-marble-2002.jpg'
    },
    {
      title: 'news 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      url: '#',
      image: 'https://timedotcom.files.wordpress.com/2015/07/earth-blue-marble-2002.jpg'
    },
    {
      title: 'news 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      url: '#',
      image: 'https://timedotcom.files.wordpress.com/2015/07/earth-blue-marble-2002.jpg'
    },
    {
      title: 'news 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      url: '#',
      image: 'https://timedotcom.files.wordpress.com/2015/07/earth-blue-marble-2002.jpg'
    },
    {
      title: 'news 6',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      url: '#',
      image: 'https://timedotcom.files.wordpress.com/2015/07/earth-blue-marble-2002.jpg'
    }
  ]

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
