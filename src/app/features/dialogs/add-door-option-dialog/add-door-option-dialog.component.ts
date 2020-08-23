import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-door-option-dialog',
  templateUrl: './add-door-option-dialog.component.html',
  styleUrls: ['./add-door-option-dialog.component.scss']
})
export class AddDoorOptionDialogComponent implements OnInit {
  form: FormGroup;
  mansusDoor: string;

  constructor(
    private dialogRef: MatDialogRef<AddDoorOptionDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) { mansusDoor }) {
      this.mansusDoor = mansusDoor;

      this.form = fb.group({
        door: new FormControl(mansusDoor),
        option: new FormControl('', [Validators.required])
      });
  }

  ngOnInit() {
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
