import { Component, OnInit, Inject } from '@angular/core';
import { GraphqlService } from '../../graphql/graphql.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';
import { filterOptions } from 'src/app/shared/utils';

@Component({
    selector: 'app-add-reward-book-dialog',
    templateUrl: './add-reward-book-dialog.component.html',
    styleUrls: ['./add-reward-book-dialog.component.scss']
})
export class AddRewardBookDialogComponent implements OnInit {
    rewardTypes: string[] = [ 'Influence', 'Language', 'Lore', 'Rite', 'Tool' ];
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
        const reward = rewards.at(index);
        rewards.at(index).get('type').valueChanges.subscribe(newVal => {
            if (newVal === 'Influence') {
                this.manageAutoComplete(index, reward, this.service.getInfluences);
            } else if (newVal === 'Language') {
                this.manageAutoComplete(index, reward, this.service.getLanguages);
            } else if (newVal === 'Lore') {
                this.manageAutoComplete(index, reward, this.service.getLores);
            } else if (newVal === 'Rite') {
                this.manageAutoComplete(index, reward, this.service.getRites);
            } else if (newVal === 'Tool') {
                this.manageAutoComplete(index, reward, this.service.getTools);
            }
        });
    }

    private manageAutoComplete(index: number, reward: AbstractControl, listFunc: () => Promise<any>) {
        listFunc().then(data => this.options[index] = data)
                  .then(val => {
                    this.filteredOptions[index] = reward.get('name').valueChanges.pipe(
                        startWith(''),
                        map(value => {
                            return filterOptions(this.options[index], value);
                        })
                    );
                  });
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
