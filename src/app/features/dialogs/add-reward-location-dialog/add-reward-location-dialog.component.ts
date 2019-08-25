import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { GraphqlService } from '../../graphql/graphql.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { filterOptions } from 'src/app/shared/utils';

@Component({
  selector: 'app-add-reward-location-dialog',
  templateUrl: './add-reward-location-dialog.component.html',
  styleUrls: ['./add-reward-location-dialog.component.scss']
})
export class AddRewardLocationDialogComponent implements OnInit {
  form: FormGroup;
  locationName: string;
  rewardTypes = [ 'Book', 'Ingredient', 'Influence', 'Tool' ];
  typeRetrieveFunctions = {};

  options: any[][] = [];
  filteredOptions: Observable<string[]>[] = [];

  constructor(
    private service: GraphqlService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddRewardLocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { locationName }) {
    this.locationName = locationName;

    this.form = fb.group({
      location: new FormControl(locationName),
      rewards: this.fb.array([this.createReward()]),
      chance: new FormControl(false)
    });
    this.manageRewardControl(0);

    this.typeRetrieveFunctions = {
      Book: service.getBooks,
      Ingredient: service.getIngredients,
      Influence: service.getInfluences,
      Tool: service.getTools
    };
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
      this.configureAutoComplete(index, this.typeRetrieveFunctions[newVal], rewards);
    });
  }

  configureAutoComplete(index: number, retrieveFunc: () => Promise<any>, rewards: FormArray) {
    retrieveFunc().then(books => this.options[index] = books)
                  .then(val => {
                    this.filteredOptions[index] = rewards.at(index).get('name').valueChanges.pipe(
                      startWith(''),
                      map(value => filterOptions(this.options[index], value))
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
