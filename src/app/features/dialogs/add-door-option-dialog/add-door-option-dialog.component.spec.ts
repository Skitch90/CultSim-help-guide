import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoorOptionDialogComponent } from './add-door-option-dialog.component';

describe('AddDoorOptionDialogComponent', () => {
  let component: AddDoorOptionDialogComponent;
  let fixture: ComponentFixture<AddDoorOptionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoorOptionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoorOptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
