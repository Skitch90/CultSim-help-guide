import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRewardLocationDialogComponent } from './add-reward-location-dialog.component';

describe('AddRewardLocationDialogComponent', () => {
  let component: AddRewardLocationDialogComponent;
  let fixture: ComponentFixture<AddRewardLocationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRewardLocationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRewardLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
