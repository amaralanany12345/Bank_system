import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptDepositComponent } from './dept-deposit.component';

describe('DeptDepositComponent', () => {
  let component: DeptDepositComponent;
  let fixture: ComponentFixture<DeptDepositComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptDepositComponent]
    });
    fixture = TestBed.createComponent(DeptDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
