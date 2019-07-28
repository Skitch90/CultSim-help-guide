import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GraphqlService } from '../../graphql/graphql.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-reward-location-dialog',
  templateUrl: './add-reward-location-dialog.component.html',
  styleUrls: ['./add-reward-location-dialog.component.scss']
})
export class AddRewardLocationDialogComponent implements OnInit {
  form: FormGroup;
  locationName: string;

  bookSelected = false;
  isNewLanguage = false;

  private rewardTypeFormControl: FormControl = new FormControl('', [Validators.required]);
  private newLanguageFormControl: FormControl = new FormControl(false);
  private languageFormControl: FormControl = new FormControl('');

  languages = [];

  constructor(
    private service: GraphqlService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddRewardLocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { locationName }) {
    this.locationName = locationName;


    this.form = fb.group({
      location: new FormControl(locationName),
      name: new FormControl('', [Validators.required]),
      rewardType: this.rewardTypeFormControl,
      language: this.languageFormControl,
      newLanguage: this.newLanguageFormControl,
      chance: new FormControl(false)
    });
  }

  ngOnInit() {
    this.service.getLanguages().then(val => this.languages = val);
    this.rewardTypeFormControl.valueChanges.subscribe(value => {
      this.bookSelected = (value === 'Book');
    })
    this.newLanguageFormControl.valueChanges.subscribe(value => {
      this.isNewLanguage = value;

      if (this.isNewLanguage) {
        this.languageFormControl.setValidators([Validators.required]);
      } else {
        this.languageFormControl.setValidators(null);
      }

      this.languageFormControl.updateValueAndValidity();
      this.languageFormControl.markAsTouched({ onlySelf: true });
    })
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
