import { TestBed } from '@angular/core/testing';

import { ArticlesModelService } from './articles-model.service';

describe('ArticlesModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesModelService = TestBed.get(ArticlesModelService);
    expect(service).toBeTruthy();
  });
});
