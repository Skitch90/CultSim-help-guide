import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoreUpgradeDialogComponent } from './add-lore-upgrade-dialog.component';

describe('AddLoreUpgradeDialogComponent', () => {
  let component: AddLoreUpgradeDialogComponent;
  let fixture: ComponentFixture<AddLoreUpgradeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoreUpgradeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoreUpgradeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
