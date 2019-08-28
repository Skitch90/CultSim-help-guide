import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GraphqlService } from '../../graphql/graphql.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { filterOptions } from 'src/app/shared/utils';

@Component({
  selector: 'app-add-reward-mansus-dialog',
  templateUrl: './add-reward-mansus-dialog.component.html',
  styleUrls: ['./add-reward-mansus-dialog.component.scss']
})
export class AddRewardMansusDialogComponent implements OnInit {
  form: FormGroup;
  mansusDoorOption: string;
  rewardTypes: string[] = [ 'Ingredient', 'Influence', 'Language', 'Lore' ];

  // lore
  lores: string[] = [];
  filteredOptions: Observable<string[]>;
  loreSelected = false;
  // Ingredient
  ingredientSelected = false;
  ingredients: string[] = [];
  filteredIngredients: Observable<string[]>;
  // influence
  influenceSelected = false;
  influences: string[] = [];
  filteredInfluences: Observable<string[]>;
  // language
  languageSelected = false;
  languages: string[] = [];

  private rewardTypeFormControl = new FormControl('', [Validators.required]);
  private loreFormControl = new FormControl('');
  private influenceFormControl = new FormControl('');

  constructor(private service: GraphqlService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddRewardMansusDialogComponent>,
              @Inject(MAT_DIALOG_DATA) { mansusDoorOption }) {
    this.mansusDoorOption = mansusDoorOption;

    this.form = fb.group({
      door: new FormControl(mansusDoorOption),
      rewardType: this.rewardTypeFormControl,
      lore: this.loreFormControl,
      influence: this.influenceFormControl,
      language: new FormControl(''),
      ingredient: new FormControl('')
    });
  }

  ngOnInit() {
    this.rewardTypeFormControl.valueChanges.subscribe(val => {
      this.loreSelected = (val === 'Lore');
      this.ingredientSelected = (val === 'Ingredient');
      this.influenceSelected = (val === 'Influence');
      this.languageSelected = (val === 'Language');

      if (this.loreSelected) {
        this.service.getLores().then(loreList => {
          this.lores = loreList;
        });
        this.loreFormControl.setValidators(Validators.required);
      } else {
        this.loreFormControl.setValidators(null);
      }
      if (this.influenceSelected) {
        this.service.getInfluences().then(influenceList => this.influences = influenceList);
        this.influenceFormControl.setValidators(Validators.required);
      } else {
        this.influenceFormControl.setValidators(null);
      }
      if (this.languageSelected) {
        this.service.getLanguages().then(languageList => this.languages = languageList);
        this.form.get('language').setValidators(Validators.required);
      } else {
        this.form.get('language').setValidators(null);
      }
      if (this.ingredientSelected) {
        const ingredientFC = this.form.get('ingredient') as FormControl;
        ingredientFC.setValidators(Validators.required);
        this.service.getIngredients().then(ingredientList => this.ingredients = ingredientList)
                                     .then(x => {
                                        this.filteredIngredients = ingredientFC.valueChanges.pipe(
                                          startWith(''),
                                          map(value => filterOptions(this.ingredients, value))
                                        );
                                     });
      } else {
        this.form.get('ingredient').setValidators(null);
      }
    });

    this.form.updateValueAndValidity();

    this.filteredOptions = this.loreFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.lores, value))
    );
    this.filteredInfluences = this.influenceFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.influences, value))
    );
  }

  private _filter(options: string[], value: string): string[] {
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
