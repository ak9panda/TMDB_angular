import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoviePageComponent } from './search-movie-page.component';

describe('SearchMoviePageComponent', () => {
  let component: SearchMoviePageComponent;
  let fixture: ComponentFixture<SearchMoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMoviePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
