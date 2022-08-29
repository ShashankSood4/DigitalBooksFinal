import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookscreateComponent } from './bookscreate.component';

describe('BookscreateComponent', () => {
  let component: BookscreateComponent;
  let fixture: ComponentFixture<BookscreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookscreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
