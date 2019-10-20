import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesireChangeDialogComponent } from './add-desire-change-dialog.component';

describe('AddDesireChangeDialogComponent', () => {
  let component: AddDesireChangeDialogComponent;
  let fixture: ComponentFixture<AddDesireChangeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesireChangeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesireChangeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
