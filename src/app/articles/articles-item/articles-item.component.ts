import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles-item',
  templateUrl: './articles-item.component.html',
  styleUrls: ['./articles-item.component.css']
})
export class ArticlesItemComponent implements OnInit {

  @Input() item

  constructor() { }

  ngOnInit() {
  }

  editArticleButton($event) {
    $event.preventDefault()
    console.log('editArticleButton');
  }

  deleteArticleButton($event) {
    $event.preventDefault()
    console.log('deleteArticleButton');
  }

}
