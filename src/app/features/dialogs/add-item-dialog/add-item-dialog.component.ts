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
  bookSelected = false;
  aspects = [];
  languages = [];

  constructor(
    private service: GraphqlService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddItemDialogComponent>) {
      this.form = fb.group({
        name: new FormControl('', [Validators.required]),
        itemType: this.itemTypeFormControl,
        aspect: this.aspectFormControl,
        quantity: this.quantityFormControl,
        language: new FormControl('')
      });
    }

  ngOnInit() {
    this.itemTypeFormControl.valueChanges.subscribe(typeVal => {
      this.loreSelected = (typeVal === 'Lore');
      this.influenceSelected = (typeVal === 'Influence');
      this.bookSelected = (typeVal === 'Book');

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

      if (this.bookSelected) {
        this.service.getLanguages().then(list => this.languages = list);
      }
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
