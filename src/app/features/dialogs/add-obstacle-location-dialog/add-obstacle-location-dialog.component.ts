import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { GraphqlService } from '../../graphql/graphql.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-obstacle-location-dialog',
  templateUrl: './add-obstacle-location-dialog.component.html',
  styleUrls: ['./add-obstacle-location-dialog.component.scss']
})
export class AddObstacleLocationDialogComponent implements OnInit {
  form: FormGroup;
  vault: string;

  obstacles: string[] = [];

  constructor(private service: GraphqlService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddObstacleLocationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) { vault }) {
    this.vault = vault;

    this.form = this.fb.group({
      location: new FormControl(this.vault),
      obstacles: this.fb.array([this.createObstacle()])
    });
  }

  ngOnInit() {
    this.service.getLocationObstacles().then(obstacleList => this.obstacles = obstacleList);
  }

  private createObstacle(): FormGroup {
    return this.fb.group({
      obstacle: new FormControl('', Validators.required)
    });
  }

  public addObstacle() {
    const obstacles = this.form.get('obstacles') as FormArray;
    obstacles.push(this.createObstacle());
  }

  public removeObstacle(index: number) {
    const obstacles = this.form.get('obstacles') as FormArray;
    obstacles.removeAt(index);
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
