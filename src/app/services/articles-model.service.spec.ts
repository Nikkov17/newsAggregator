import { TestBed } from '@angular/core/testing';

import { ArticlesModelService } from './articles-model.service';
import { BehaviorSubject } from 'rxjs';

describe('ArticlesModelService', () => {
  let instance;

  beforeEach(() => {
    instance = new ArticlesModelService();
    TestBed.configureTestingModule({});
  });

  describe('.addApiArticles', () => {
    it('should add returned from Api Articles', () => {
      spyOn(instance, 'updateArticlesToShowArray');
      instance.addApiArticles([1, 2]);

      expect(instance.apiArticles).toEqual([1, 2]);
      expect(instance.updateArticlesToShowArray).toHaveBeenCalled();
    });
  });

  describe('.updateArticlesToShowArray', () => {
    it('should update ArticlesToShowArray', () => {
      instance.apiArticles = [1];
      instance.myArticles = [2];

      instance.updateArticlesToShowArray();

      expect(instance.articlesToShow).toEqual([1, 2]);
    });

    it('ArticlesToShowArray should be myArticles', () => {
      instance.apiArticles = [1];
      instance.myArticles = [2];
      instance.isManually = true;

      instance.updateArticlesToShowArray();

      expect(instance.articlesToShow).toEqual([2]);
    });

    it('should filter ArticlesToShowArray', () => {
      instance.apiArticles = [{
        title: 1
      }];
      instance.myArticles = [{
        title: 2
      }];
      instance.filter = 1;

      instance.updateArticlesToShowArray();

      expect(instance.articlesToShow).toEqual([{
        title: 1
      }]);
    });

    it('should call eventChange', () => {
      spyOn(instance, 'eventChange');

      instance.updateArticlesToShowArray();

      expect(instance.eventChange).toHaveBeenCalled();
    });
  });

  describe('.addNewArticle', () => {
    it('should add new article to myArticles', () => {
      let item = {
        title: 1
      };

      spyOn(instance, 'updateArticlesToShowArray');
      spyOn(instance.myArticles, 'push');

      instance.addNewArticle(item);

      expect(instance.myArticles.push).toHaveBeenCalledWith(item);
      expect(instance.updateArticlesToShowArray).toHaveBeenCalled();
    });
  });

  describe('.changeArticle', () => {
    it('should change current article item and call updateArticlesToShowArray', () => {
      let item = {
        title: 2,
        manuallyAdded: true
      };

      instance.myArticles = []
      spyOn(instance, 'updateArticlesToShowArray');
      spyOn(instance.myArticles, 'indexOf').and.returnValue(0);

      instance.changeArticle(item);

      expect(instance.updateArticlesToShowArray).toHaveBeenCalled();
      expect(instance.myArticles[0]).toEqual(item);
    });
  });

  describe('.delete', () => {
    it('should delete item from myArticles and call updateArticlesToShowArray', () => {
      let item1 = {
        title: 1,
        manuallyAdded: true
      };
      let item2 = {
        title: 2,
        manuallyAdded: true
      };

      instance.myArticles = [item1, item2];
      spyOn(instance, 'updateArticlesToShowArray');

      instance.delete(item1);

      expect(instance.updateArticlesToShowArray).toHaveBeenCalled();
      expect(instance.myArticles).toEqual([item2]);
    });
  });

  describe('.isExclusiveByTitle', () => {
    it('should check that new item is not exclusive by title', () => {
      let item1 = {
        title: 1,
        manuallyAdded: true
      };
      let item2 = {
        title: 2,
        manuallyAdded: true
      };

      instance.myArticles = [item1, item2];

      expect(instance.isExclusiveByTitle(item1)).toBeFalsy();
    });

    it('should check that new item is exclusive by title', () => {
      let item1 = {
        title: 1,
        manuallyAdded: true
      };
      let item2 = {
        title: 2,
        manuallyAdded: true
      };

      instance.myArticles = [item1];

      expect(instance.isExclusiveByTitle(item2)).toBeTruthy();
    });
  });

  describe('.eventChange', () => {
    it('should trigger next on observable object', () => {
      spyOn(instance.observableArticles, 'next');

      instance.eventChange();

      expect(instance.observableArticles.next).toHaveBeenCalledWith(instance.articlesToShow);
    });
  });

  describe('.constructor', () => {
    it('should create new articlesToShow and observableArticles', () => {
      instance.constructor();

      expect(instance.articlesToShow).toEqual(jasmine.any(Array));
      expect(instance.observableArticles).toEqual(jasmine.any(BehaviorSubject));
    });
  });

  describe('.sendFetch', () => {
    it('should send fetch', () => {
      let promise = new Promise(() => {
        articles:[]
      });

      spyOn(instance, 'addApiArticles').and.returnValue(true);
      spyOn(instance, 'updateArticlesToShowArray').and.returnValue(true);
      spyOn(instance, 'sendFetch').and.returnValue(promise);

      expect(instance.sendFetch()).toEqual(jasmine.any(Promise));
    });
  });
});
