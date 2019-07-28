import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GraphqlService } from '../../graphql/graphql.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-influence-decay-dialog',
  templateUrl: './add-influence-decay-dialog.component.html',
  styleUrls: ['./add-influence-decay-dialog.component.scss']
})
export class AddInfluenceDecayDialogComponent implements OnInit {
  influence: String;
  form: FormGroup;

  influences: String[] = [];
  filteredInfluences: Observable<String[]>;
  influenceFormControl = new FormControl('', Validators.required);

  constructor(private service: GraphqlService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddInfluenceDecayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { influence }) {
      this.influence = influence;

      this.form = fb.group({
        originInfluence: new FormControl(influence),
        influence: this.influenceFormControl
      });
    }

  ngOnInit() {
    this.service.getInfluences().then(val => this.influences = val);
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
