import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTutorTeachesDialogComponent } from './add-tutor-teaches-dialog.component';

describe('AddTutorTeachesDialogComponent', () => {
    let component: AddTutorTeachesDialogComponent;
    let fixture: ComponentFixture<AddTutorTeachesDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddTutorTeachesDialogComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddTutorTeachesDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
