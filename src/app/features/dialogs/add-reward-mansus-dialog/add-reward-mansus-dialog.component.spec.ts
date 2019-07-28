import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRewardMansusDialogComponent } from './add-reward-mansus-dialog.component';

describe('AddRewardMansusDialogComponent', () => {
  let component: AddRewardMansusDialogComponent;
  let fixture: ComponentFixture<AddRewardMansusDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRewardMansusDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRewardMansusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
