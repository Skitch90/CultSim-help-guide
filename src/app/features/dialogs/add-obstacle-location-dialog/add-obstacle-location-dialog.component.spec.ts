import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObstacleLocationDialogComponent } from './add-obstacle-location-dialog.component';

describe('AddObstacleLocationDialogComponent', () => {
  let component: AddObstacleLocationDialogComponent;
  let fixture: ComponentFixture<AddObstacleLocationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObstacleLocationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObstacleLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
