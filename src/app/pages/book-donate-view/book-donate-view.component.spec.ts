import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDonateViewComponent } from './book-donate-view.component';

describe('BookDonateViewComponent', () => {
  let component: BookDonateViewComponent;
  let fixture: ComponentFixture<BookDonateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDonateViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDonateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
