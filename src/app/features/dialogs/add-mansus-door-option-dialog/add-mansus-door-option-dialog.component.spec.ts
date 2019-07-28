import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMansusDoorOptionDialogComponent } from './add-mansus-door-option-dialog.component';

describe('AddMansusDoorOptionDialogComponent', () => {
  let component: AddMansusDoorOptionDialogComponent;
  let fixture: ComponentFixture<AddMansusDoorOptionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMansusDoorOptionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMansusDoorOptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
