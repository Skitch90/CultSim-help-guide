import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GraphqlService } from '../../graphql/graphql.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-reward-mansus-dialog',
  templateUrl: './add-reward-mansus-dialog.component.html',
  styleUrls: ['./add-reward-mansus-dialog.component.scss']
})
export class AddRewardMansusDialogComponent implements OnInit {
  form: FormGroup;
  mansusDoorOption: String;

  // lore
  lores: String[] = [];
  filteredOptions: Observable<String[]>;
  loreSelected = false;
  // influence
  influenceSelected = false;
  influences: String[] = [];
  filteredInfluences: Observable<String[]>;

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
      influence: this.influenceFormControl
    });
  }

  ngOnInit() {
    this.rewardTypeFormControl.valueChanges.subscribe(val => {
      this.loreSelected = (val === 'Lore');
      this.influenceSelected = (val === 'Influence');

      if (this.loreSelected) {
        this.service.getLores().then(val => {
          this.lores = val;
        });
        this.loreFormControl.setValidators(Validators.required);
      } else {
        this.loreFormControl.setValidators(null);
      }
      if (this.influenceSelected) {
        this.service.getInfluences().then(val => this.influences = val);
        this.influenceFormControl.setValidators(Validators.required);
      } else {
        this.influenceFormControl.setValidators(null);
      }
    });

    this.form.updateValueAndValidity();

    this.filteredOptions = this.loreFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.lores, value))
    )
    this.filteredInfluences = this.influenceFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.influences, value))
    );
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
