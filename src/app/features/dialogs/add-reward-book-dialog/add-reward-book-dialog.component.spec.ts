import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRewardBookDialogComponent } from './add-reward-book-dialog.component';

describe('AddRewardBookDialogComponent', () => {
  let component: AddRewardBookDialogComponent;
  let fixture: ComponentFixture<AddRewardBookDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRewardBookDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRewardBookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
