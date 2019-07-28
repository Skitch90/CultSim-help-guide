import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfluenceDecayDialogComponent } from './add-influence-decay-dialog.component';

describe('AddInfluenceDecayDialogComponent', () => {
  let component: AddInfluenceDecayDialogComponent;
  let fixture: ComponentFixture<AddInfluenceDecayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInfluenceDecayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInfluenceDecayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
