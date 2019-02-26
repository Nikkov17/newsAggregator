import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesComponent } from './articles.component';
import { ArticlesModelService } from '../../services/articles-model.service';
import { ArticlesItemComponent } from './articles-item/articles-item.component';
import { ButtonComponent } from '../common/button/button.component';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticlesComponent,
        ArticlesItemComponent,
        ButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    instance = new ArticlesComponent(new ArticlesModelService());
  });

  describe('.ngOnInit', () => {
    it('should subscribe on observableArticles', () => {
      spyOn(instance.ArticlesModelService.observableArticles,'subscribe');

      instance.ngOnInit();

      expect(instance.ArticlesModelService.observableArticles.subscribe).toHaveBeenCalled();
      expect(instance.ArticlesModelService.currentItem).toEqual(null);
    });
  });
});
