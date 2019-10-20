import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GraphqlService } from '../../graphql/graphql.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';
import { startWith, map, switchMap, filter, debounceTime } from 'rxjs/operators';
import { filterOptions, isEntity } from 'src/app/shared/utils';
import { Entity } from 'src/app/shared/model';

@Component({
  selector: 'app-add-desire-change-dialog',
  templateUrl: './add-desire-change-dialog.component.html',
  styleUrls: ['./add-desire-change-dialog.component.scss']
})
export class AddDesireChangeDialogComponent implements OnInit {
  desire: string;
  form: FormGroup;

  desires: string[] = [];
  filteredDesires: Observable<string[]>;
  filteredIngr1: Observable<Entity[]>;
  filteredIngr2: Observable<Entity[]>;

  constructor(private service: GraphqlService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddDesireChangeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) { desire }) {
    this.desire = desire;
    this.form = fb.group({
      startDesire: new FormControl(desire),
      desire: new FormControl('', Validators.required),
      ingredient1: new FormControl('', Validators.required),
      ingredient2: new FormControl('')
    });
  }

  ngOnInit() {
    this.service.getDesires()
                .then(queryResult => {
                  const resultArray = queryResult as string[];
                  this.desires = resultArray.filter(item => item !== this.desire);
                }).then(val => {
                  this.filteredDesires = this.form.get('desire').valueChanges.pipe(
                    startWith(''),
                    map(newVal => filterOptions(this.desires, newVal))
                  );
                });
    this.filteredIngr1 = this.form.get('ingredient1').valueChanges.pipe(
      filter(value => !isEntity(value)),
      debounceTime(500),
      switchMap(value => this.service.getEntities(value))
    );
    this.filteredIngr2 = this.form.get('ingredient2').valueChanges.pipe(
      filter(value => !isEntity(value)),
      debounceTime(500),
      switchMap(value => this.service.getEntities(value))
    );
  }

  displayFn(item?: Entity): string | undefined {
    return item ? item.name : undefined;
  }

  save() {
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
