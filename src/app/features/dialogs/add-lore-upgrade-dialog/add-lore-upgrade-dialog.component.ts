import { Component, OnInit, Inject } from '@angular/core';
import { GraphqlService } from '../../graphql/graphql.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { startWith, map } from 'rxjs/operators';
import { filterOptions } from 'src/app/shared/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-lore-upgrade-dialog',
  templateUrl: './add-lore-upgrade-dialog.component.html',
  styleUrls: ['./add-lore-upgrade-dialog.component.scss']
})
export class AddLoreUpgradeDialogComponent implements OnInit {
  lore: string;
  form: FormGroup;

  lores: string[] = [];
  filteredLores: Observable<string[]>;

  constructor(private graphql: GraphqlService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddLoreUpgradeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) { lore }) {
    this.lore = lore;

    this.form = fb.group({
      startLore: new FormControl(lore),
      lore: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.graphql.getLores()
                .then(queryResult => this.lores = queryResult)
                .then(val => {
                  this.filteredLores = this.form.get('lore').valueChanges.pipe(
                    startWith(''),
                    map(newVal => filterOptions(this.lores, newVal))
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
