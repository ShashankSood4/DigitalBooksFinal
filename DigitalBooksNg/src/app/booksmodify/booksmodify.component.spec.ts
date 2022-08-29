import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksmodifyComponent } from './booksmodify.component';

describe('BooksmodifyComponent', () => {
  let component: BooksmodifyComponent;
  let fixture: ComponentFixture<BooksmodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksmodifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
