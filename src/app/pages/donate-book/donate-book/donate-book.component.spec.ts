import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateBookComponent } from './donate-book.component';

describe('DonateBookComponent', () => {
  let component: DonateBookComponent;
  let fixture: ComponentFixture<DonateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
