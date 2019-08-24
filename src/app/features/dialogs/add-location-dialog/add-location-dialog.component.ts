import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GraphqlService } from '../../graphql/graphql.service';
import { startWith, map } from 'rxjs/operators';
import { filterOptions } from 'src/app/shared/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-location-dialog',
  templateUrl: './add-location-dialog.component.html',
  styleUrls: ['./add-location-dialog.component.scss']
})
export class AddLocationDialogComponent implements OnInit {
  form: FormGroup;
  secretHistory: string;
  locations: string[] = [];
  filteredLocations: Observable<string[]>;

  constructor(
    private service: GraphqlService,
    private dialogRef: MatDialogRef<AddLocationDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) { secretHistory }) {
    this.secretHistory = secretHistory;

    this.form = fb.group({
      history: new FormControl(secretHistory),
      location: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.service.getLocations()
      .then(
        locationList => this.locations = locationList.filter(location => location.vault).map(vault => vault.name)
      ).then(val => {
        this.filteredLocations = this.form.get('location').valueChanges.pipe(
          startWith(''),
          map(value => filterOptions(this.locations, value))
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
