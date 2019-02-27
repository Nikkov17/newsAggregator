import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { ArticlesModelService } from '../../../services/articles-model.service';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    instance = fixture.debugElement.componentInstance;
  });

  describe('.onCheckboxUpdate', () => {
    it('should send fetch', () => {
      spyOn(instance.ArticlesModelService,'updateArticlesToShowArray');

      instance.onCheckboxUpdate({
        target:{
          checked: 'yes'
        }
      });

      expect(instance.ArticlesModelService.isManually).toEqual('yes');
      expect(instance.ArticlesModelService.updateArticlesToShowArray).toHaveBeenCalled();
    });
  });
});
