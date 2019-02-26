import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesItemComponent } from './articles-item.component';
import { ArticlesModelService } from '../../../services/articles-model.service';
import { ButtonComponent } from '../../common/button/button.component';
import { Router } from '@angular/router';

describe('ArticlesItemComponent', () => {
  let component: ArticlesItemComponent;
  let fixture: ComponentFixture<ArticlesItemComponent>;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }],
      declarations: [
        ArticlesItemComponent,
        ButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    instance = new ArticlesItemComponent(new ArticlesModelService(), new Router(null, null, null, null, null,null, null, null));
  });

  xdescribe('.editArticleButton', () => {
    it('should call router navigate and reset currentItem', () => {
      instance.item = {
        urlToImage: 'dwq'
      };

      spyOn(instance.router, 'navigate').and.returnValue(true);

      instance.editArticleButton(event)

      expect(instance.router.navigate).toHaveBeenCalledWith(['editarticle']);
      expect(instance.ArticlesModelService.currentItem).toEqual(instance.item);
    });
  });

  xdescribe('.deleteArticleButton', () => {
    it('should delete item and navigate', () => {
      instance.item = {
        urlToImage: 'dwq'
      };

      spyOn(instance.ArticlesModelService, 'delete').and.returnValue(true);
      spyOn(instance.router, 'navigate').and.returnValue(true);

      instance.deleteArticleButton(event)

      expect(instance.router.navigate).toHaveBeenCalledWith(['']);
      expect(instance.ArticlesModelService.delete).toHaveBeenCalledWith(instance.item);
    });
  });
});
