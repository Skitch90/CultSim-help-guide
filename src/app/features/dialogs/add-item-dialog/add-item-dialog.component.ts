import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GraphqlService } from '../../graphql/graphql.service';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.scss']
})
export class AddItemDialogComponent implements OnInit {
  form: FormGroup;

  private itemTypeFormControl = new FormControl('', [Validators.required]);
  private aspectFormControl = new FormControl('');
  private quantityFormControl = new FormControl('');

  loreSelected = false;
  influenceSelected = false;
  aspects = [];

  constructor(
    private service: GraphqlService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddItemDialogComponent>) {
      this.form = fb.group({
        name: new FormControl('', [Validators.required]),
        itemType: this.itemTypeFormControl,
        aspect: this.aspectFormControl,
        quantity: this.quantityFormControl
      });
    }

  ngOnInit() {
    
    this.itemTypeFormControl.valueChanges.subscribe(val => {
      this.loreSelected = (val === 'Lore');
      this.influenceSelected = (val === 'Influence');

      if (this.loreSelected || this.influenceSelected) {
        // Fetching previously saved apsects
        this.service.getAspects().then(val => this.aspects = val);

        this.aspectFormControl.setValidators([Validators.required]);
        this.quantityFormControl.setValidators([Validators.required]);
      } else {
        this.aspectFormControl.setValidators(null);
        this.quantityFormControl.setValidators(null);
      }
      this.aspectFormControl.updateValueAndValidity();
      this.aspectFormControl.markAsTouched({ onlySelf: true });
      this.quantityFormControl.updateValueAndValidity();
      this.quantityFormControl.markAsTouched({ onlySelf: true });
    });
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
