import { Component, OnInit, Inject } from '@angular/core';
import { GraphqlService } from '../../graphql/graphql.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
    selector: 'app-add-reward-book-dialog',
    templateUrl: './add-reward-book-dialog.component.html',
    styleUrls: ['./add-reward-book-dialog.component.scss']
})
export class AddRewardBookDialogComponent implements OnInit {
    form: FormGroup;
    bookTitle: String;
    lores: String[] = [];
    filteredOptions: Observable<String[]>;
    loreSelected = false;
    languageSelected = false;
    languages: String[] = [];
    filteredLanguages: Observable<String[]>;

    private rewardTypeFormControl = new FormControl('', [Validators.required]);
    private loreFormControl = new FormControl('');
    private languageFormControl = new FormControl('')

    constructor(private service: GraphqlService,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<AddRewardBookDialogComponent>,
        @Inject(MAT_DIALOG_DATA) { bookTitle }) {
        this.bookTitle = bookTitle;

        this.form = fb.group({
            book: new FormControl(bookTitle),
            rewardType: this.rewardTypeFormControl,
            lore: this.loreFormControl,
            language: this.languageFormControl
        });
    }

    ngOnInit() {
        this.rewardTypeFormControl.valueChanges.subscribe(val => {
            this.loreSelected = (val === 'Lore');
            this.languageSelected = (val === 'Language');

            if (this.loreSelected) {
                this.service.getLores().then(val => this.lores = val);
                this.loreFormControl.setValidators(Validators.required);
            } else {
                this.loreFormControl.setValidators(null);
            }
            if (this.languageSelected) {
                this.service.getLanguages().then(val => this.languages = val);
                this.languageFormControl.setValidators(Validators.required);
            } else {
                this.languageFormControl.setValidators(null);
            }
        });
        this.filteredOptions = this.loreFormControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(this.lores, value))
        )
        this.filteredLanguages = this.languageFormControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(this.languages, value))
        )
    }

    private _filter(options: String[], value: String): String[] {
        const filterValue = value.toLowerCase();
    
        return options.filter(option => option.toLowerCase().includes(filterValue));
      }

    save() {
        this.form.updateValueAndValidity();
        if (this.form.valid) {
            this.dialogRef.close(this.form.getRawValue());
        }
    }

    close() {
        this.dialogRef.close();
    }
}
