import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DragDropModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatListModule,
        MatSlideToggleModule,
        ScrollingModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ],
    exports: [
        DragDropModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatListModule,
        MatSlideToggleModule,
        ScrollingModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule { }
