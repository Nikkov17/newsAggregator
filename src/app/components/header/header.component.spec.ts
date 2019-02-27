import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesModelService } from '../../services/articles-model.service';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { InputComponent } from '../common/input/input.component';
import { SelectComponent } from '../common/select/select.component';
import { ButtonComponent } from '../common/button/button.component';
import { CheckboxComponent } from '../common/checkbox/checkbox.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }],
      imports: [RouterTestingModule],
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
    instance = fixture.debugElement.componentInstance;
  });

  it('should check default parameters', () => {
    expect(instance.select).toEqual({
      sourcesArray: ['abc-news', 'bbc-news', 'ansa', 'bbc-sport', 'bloomberg'],
      placeholder: 'choose source'
    });
    expect(instance.login).toEqual("login");
    expect(instance.ChoosenSource).toEqual("Choosen source");
  });

  describe('.redirectHome', () => {
    it('should redirect Home', () => {
      let event = {
        preventDefault: function() {},
        target: [
          {
            value: 'q'
          }
        ]
      };

      instance.redirectHome(event);

      expect(instance.router.navigate).toHaveBeenCalledWith(['']);
    });
  });

  describe('.addArticleButton', () => {
    it('should to add Article page', () => {
      let event = {
        preventDefault: function() {},
        target: [
          {
            value: 'q'
          }
        ]
      };

      instance.addArticleButton(event);

      expect(instance.router.navigate).toHaveBeenCalledWith(['addarticle']);
    });
  });

  describe('.filterFormSubmit', () => {
    it('should set ArticlesModelService filter and updare articles to show array', () => {
      let event = {
        preventDefault: function() {},
        target: [
          {
            value: 'q'
          }
        ]
      };

      spyOn(instance.ArticlesModelService, 'updateArticlesToShowArray');
      
      instance.filterFormSubmit(event);

      expect(instance.ArticlesModelService.filter).toEqual('q');
      expect(instance.ArticlesModelService.updateArticlesToShowArray).toHaveBeenCalled();
    });
  });

  describe('.onSelectChange', () => {
    it('should chenge selected source', () => {
      let value = 'q';

      spyOn(instance.ArticlesModelService, 'sendFetch').and.returnValue(true);

      instance.onSelectChange(value);

      expect(instance.ArticlesModelService.sendFetch).toHaveBeenCalledWith(value);
      expect(instance.ChoosenSource).toEqual(value);
    });
  });
});
