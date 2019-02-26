import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesModelService } from '../../services/articles-model.service';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { InputComponent } from '../common/input/input.component';
import { SelectComponent } from '../common/select/select.component';
import { ButtonComponent } from '../common/button/button.component';
import { CheckboxComponent } from '../common/checkbox/checkbox.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }],
      declarations: [
        HeaderComponent,
        CheckboxComponent,
        SelectComponent,
        InputComponent,
        ButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    instance = new HeaderComponent(new Router(null, null, null, null, null, null, null, null), new ArticlesModelService());
    spyOn(instance.router, 'navigate');
  });

  xit('should check default parameters', () => {
    expect(instance.select).toEqual({
      sourcesArray: ['abc-news', 'bbc-news', 'ansa', 'bbc-sport', 'bloomberg'],
      placeholder: 'choose source'
    });
    expect(instance.login).toEqual("login");
    expect(instance.ChoosenSource).toEqual("Choosen source");
  });

  xdescribe('.redirectHome', () => {
    it('should redirect Home', () => {
      instance.redirectHome(event);

      expect(instance.router.navigate).toHaveBeenCalledWith(['']);
    });
  });

  xdescribe('.addArticleButton', () => {
    it('should to add Article page', () => {
      instance.addArticleButton(event);

      expect(instance.router.navigate).toHaveBeenCalledWith(['addarticle']);
    });
  });

  xdescribe('.filterFormSubmit', () => {
    it('should set ArticlesModelService filter and updare articles to show array', () => {
      let event = {
        target: [
          {
            value: 'q'
          }
        ]
      }

      spyOn(instance.ArticlesModelService, 'updateArticlesToShowArray');
      
      instance.filterFormSubmit(event);

      expect(instance.router.filter).toEqual('q');
      expect(instance.ArticlesModelService.updateArticlesToShowArray).toHaveBeenCalled();
    });
  });

  xdescribe('.onSelectChange', () => {
    it('should chenge selected source', () => {
      let value = 'q';

      spyOn(instance.ArticlesModelService, 'sendFetch').and.returnValue(true);

      instance.onSelectChange(value);

      expect(instance.ArticlesModelService.sendFetch).toHaveBeenCalledWith(value);
      expect(instance.ChoosenSource).toEqual(value);
    });
  });
});
