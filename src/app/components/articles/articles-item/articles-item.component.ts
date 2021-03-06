import { Component, OnInit, Input } from '@angular/core';
import { ArticlesModelService } from '../../../services/articles-model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-item',
  templateUrl: './articles-item.component.html',
  styleUrls: ['./articles-item.component.css']
})
export class ArticlesItemComponent implements OnInit {

  @Input() item

  constructor(private ArticlesModelService: ArticlesModelService, private router: Router) { }

  ngOnInit() {
  }

  editArticleButton($event) {
    $event.preventDefault();
    this.ArticlesModelService.currentItem = this.item;
    this.router.navigate(['editarticle']);
  }

  deleteArticleButton($event) {
    $event.preventDefault()
    this.ArticlesModelService.delete(this.item);
    this.router.navigate(['']);
  }

}
