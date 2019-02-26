import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarticleComponent } from './addarticle.component';
import { InputComponent } from '../../common/input/input.component';
import { ArticlesComponent } from '../articles.component';
import { ArticlesItemComponent } from '../articles-item/articles-item.component';
import { ButtonComponent } from '../../common/button/button.component';
import { ArticlesModelService } from '../../../services/articles-model.service';
import { AppRoutingModule } from '../../../routers/app-routing.module';
import { Router } from '@angular/router';

describe('AddarticleComponent', () => {
  let component: AddarticleComponent;
  let fixture: ComponentFixture<AddarticleComponent>;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }],
      imports: [AppRoutingModule],
      declarations: [
        ArticlesComponent,
        AddarticleComponent,
        InputComponent,
        ButtonComponent,
        ArticlesItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    instance = new AddarticleComponent(new ArticlesModelService(), new Router(null, null, null, null, null, null, null, null));
  });

  xit('should check default parameters', () => {
    expect(instance.title).toEqual("type title...");
    expect(instance.Content).toEqual("type content...");
    expect(instance.Description).toEqual("type description...");
    expect(instance.urlToImage).toEqual("type image url...");
    expect(instance.url).toEqual("type content...");
  });

  xdescribe('.onSubmit', () => {
    beforeEach(() => {
      let event = {
        target: [
          {
            value: 'q'
          },
          {
            value: 'w'
          },
          {
            value: 'e'
          },
          {
            value: 'r'
          },
          {
            value: 't'
          }
        ]
      };
    });

    it('should save edited article', () => {
      spyOn(instance.ArticlesModelService, 'changeArticle');
      spyOn(instance.router, 'navigate');
      instance.ArticlesModelService.currentItem = true;

      instance.onSubmit(event);

      expect(instance.ArticlesModelService.changeArticle).toHaveBeenCalled();
      expect(instance.router.navigate).toHaveBeenCalledWith(['']);
    });

    it('should add new article', () => {
      spyOn(instance.ArticlesModelService, 'addNewArticle');
      spyOn(instance.router, 'navigate');
      spyOn(instance.ArticlesModelService, 'isExclusiveByTitle').and.returnValue(true);
      instance.ArticlesModelService.currentItem = false;

      instance.onSubmit(event);

      expect(instance.ArticlesModelService.addNewArticle).toHaveBeenCalled();
      expect(instance.router.navigate).toHaveBeenCalledWith(['']);
    });
  });

  xdescribe('.ngOnInit', () => {
    it('should set new values if current item exists', () => {
      instance.ArticlesModelService.currentItem = {
        title: 'q',
        content: 'w',
        description: 'e',
        urlToImage: 'r',
        url: 't'
      };

      instance.ngOnInit();

      expect(instance.valueTitle).toEqual('q');
      expect(instance.valueContent).toEqual('w');
      expect(instance.valueDescription).toEqual('e');
      expect(instance.valueurlToImage).toEqual('r');
      expect(instance.valueUrl).toEqual('t');
    });
  });
});
