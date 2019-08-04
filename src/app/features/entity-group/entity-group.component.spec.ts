import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityGroupComponent } from './entity-group.component';

describe('EntityGroupComponent', () => {
  let component: EntityGroupComponent;
  let fixture: ComponentFixture<EntityGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
