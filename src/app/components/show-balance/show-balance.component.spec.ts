import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBalanceComponent } from './show-balance.component';

describe('ShowBalanceComponent', () => {
  let component: ShowBalanceComponent;
  let fixture: ComponentFixture<ShowBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBalanceComponent]
    });
    fixture = TestBed.createComponent(ShowBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
