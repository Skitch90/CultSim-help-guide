import { Component, OnInit, Inject } from '@angular/core';
import { GraphqlService } from '../../graphql/graphql.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-add-reward-book-dialog',
    templateUrl: './add-reward-book-dialog.component.html',
    styleUrls: ['./add-reward-book-dialog.component.scss']
})
export class AddRewardBookDialogComponent implements OnInit {
    form: FormGroup;
    bookTitle: string;

    options: any[][] = [];
    filteredOptions: Observable<string[]>[] = [];

    constructor(private service: GraphqlService,
                private fb: FormBuilder,
                private dialogRef: MatDialogRef<AddRewardBookDialogComponent>,
                @Inject(MAT_DIALOG_DATA) { bookTitle }) {
        this.bookTitle = bookTitle;

        this.form = this.fb.group({
            book: new FormControl(this.bookTitle),
            rewards: this.fb.array([this.createReward()])
        });
        this.manageRewardControl(0);
    }

    ngOnInit() {
    }

    private createReward(): FormGroup {
        return this.fb.group({
            type: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required)
        });
    }

    public addReward() {
        const rewards = this.form.get('rewards') as FormArray;
        rewards.push(this.createReward());
        this.manageRewardControl(rewards.length - 1);
    }

    public removeReward(index: number) {
        const rewards = this.form.get('rewards') as FormArray;
        rewards.removeAt(index);
        this.filteredOptions.splice(index, 1);
        this.options.splice(index, 1);
    }

    private manageRewardControl(index: number) {
        const rewards = this.form.get('rewards') as FormArray;
        rewards.at(index).get('type').valueChanges.subscribe(newVal => {
            console.log('new type value', newVal, 'for reward at index ', index);
            if (newVal === 'Influence') {
                this.service.getInfluences().then(influences => this.options[index] = influences);
            } else if (newVal === 'Language') {
                this.service.getLanguages().then(languages => this.options[index] = languages);
            } else if (newVal === 'Lore') {
                this.service.getLores().then(lores => this.options[index] = lores);
            } else if (newVal === 'Ritual') {
                // FIXME missing ritual management
                // this.service.getr
                this.options[index] = [];
            }
            rewards.at(index).get('name').setValue('');
            this.filteredOptions[index] = this.filteredOptions[index].pipe(startWith(this.options[index]));
        });
        this.filteredOptions[index] = rewards.at(index).get('name').valueChanges.pipe(
            startWith(''),
            map(value => {
                return this._filter(this.options[index], value);
            })
        );
    }

    private _filter(options: string[], value: string): string[] {
        if (options === undefined) {
            return [];
        }

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
