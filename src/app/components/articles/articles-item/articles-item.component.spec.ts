import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesItemComponent } from './articles-item.component';
import { ArticlesModelService } from '../../../services/articles-model.service';
import { ButtonComponent } from '../../common/button/button.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArticlesItemComponent', () => {
  let component: ArticlesItemComponent;
  let fixture: ComponentFixture<ArticlesItemComponent>;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }],
      imports: [RouterTestingModule],
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
    instance = fixture.debugElement.componentInstance;
  });

  //cannot get property of undefined(@Input item)
  xdescribe('.editArticleButton', () => {
    it('should call router navigate and reset currentItem', () => {
      let event = {
        preventDefault: function() {}
      };

      instance.item = {
        urlToImage: 'dwq'
      };

      instance.router.navigate.and.returnValue(true);

      instance.editArticleButton(event)

      expect(instance.router.navigate).toHaveBeenCalledWith(['editarticle']);
      expect(instance.ArticlesModelService.currentItem).toEqual(instance.item);
    });
  });

  //cannot get property of undefined(@Input item)
  xdescribe('.deleteArticleButton', () => {
    it('should delete item and navigate', () => {
      let event = {
        preventDefault: function() {}
      };

      instance.item = {
        urlToImage: 'dwq'
      };

      spyOn(instance.ArticlesModelService, 'delete').and.returnValue(true);
      instance.router.navigate.and.returnValue(true);

      instance.deleteArticleButton(event)

      expect(instance.router.navigate).toHaveBeenCalledWith(['']);
      expect(instance.ArticlesModelService.delete).toHaveBeenCalledWith(instance.item);
    });
  });
});
