import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityGroupItemComponent } from './entity-group-item.component';

describe('EntityGroupItemComponent', () => {
  let component: EntityGroupItemComponent;
  let fixture: ComponentFixture<EntityGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
