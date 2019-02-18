import { Component, OnInit, Input } from '@angular/core';
import { ArticlesModelService } from '../../../services/articles-model.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() checkbox

  onCheckboxUpdate($event) {
    this.ArticlesModelService.isManually = $event.target.checked;
    this.ArticlesModelService.updateArticlesToShowArray();
  }
  constructor(private ArticlesModelService: ArticlesModelService) { }

  ngOnInit() {
  }

}
