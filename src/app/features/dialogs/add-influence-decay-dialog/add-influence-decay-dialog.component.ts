import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GraphqlService } from '../../graphql/graphql.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { startWith, map } from 'rxjs/operators';
import { filterOptions } from 'src/app/shared/utils';

@Component({
  selector: 'app-add-influence-decay-dialog',
  templateUrl: './add-influence-decay-dialog.component.html',
  styleUrls: ['./add-influence-decay-dialog.component.scss']
})
export class AddInfluenceDecayDialogComponent implements OnInit {
  influence: string;
  form: FormGroup;

  influences: string[] = [];
  filteredInfluences: Observable<string[]>;
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
    this.service.getInfluences()
                .then(queryResult => {
                  const resultArray = queryResult as string[];
                  this.influences = resultArray.filter(item => item !== this.influence);
                }).then(val => {
                  this.filteredInfluences = this.form.get('influence').valueChanges.pipe(
                    startWith(''),
                    map(newVal => filterOptions(this.influences, newVal))
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
