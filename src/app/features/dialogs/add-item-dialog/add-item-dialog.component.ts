import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GraphqlService } from '../../graphql/graphql.service';
import { GetAspectsGQL } from '../../graphql/operations';

const followerAspectRequiredValidator: ValidatorFn = (fg: FormGroup) => {
    const itemType = fg.get('itemType').value;
    if (itemType === 'Follower') {
        return Validators.required(fg.get('followerAspect'));
    } else {
        return null;
    }
};

@Component({
    selector: 'app-add-item-dialog',
    templateUrl: './add-item-dialog.component.html',
    styleUrls: ['./add-item-dialog.component.scss']
})
export class AddItemDialogComponent implements OnInit {
  itemTypes: string[] = [ 'Aspect', 'Book', 'ChangeLesson', 'Desire', 'ExpeditionObstacle', 'Follower', 'Influence', 'Ingredient',
      'Language', 'Location', 'Lore', 'MansusDoor', 'Rite', 'Tool', 'Tutor' ];
  itemTypesWithAspects: string[] = [ 'Influence', 'Ingredient', 'Lore', 'Tool' ];
  multipleAspects = {
      Influence: true,
      Ingredient: true,
      Lore: false,
      Tool: true
  };
  itemAspectQuantities = {
      Influence: [ 1, 2, 6, 10, 15 ],
      Ingredient: [ 1, 2, 3, 4, 8, 12 ],
      Lore: [ 2, 4, 6, 8, 10, 12, 14 ],
      Tool: [ 2, 4, 8, 12 ]
  };

  form: FormGroup;

  readonly itemTypeFormControl = new FormControl('', [Validators.required]);

  loreSelected = false;
  influenceSelected = false;
  bookSelected = false;
  aspects: string[] = [];
  languages = [];

  constructor(
    private service: GraphqlService,
    private getAspectsGQL: GetAspectsGQL,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddItemDialogComponent>) {
      this.form = fb.group({
          name: new FormControl('', [Validators.required]),
          itemType: this.itemTypeFormControl,
          aspects: fb.array([]),
          language: new FormControl(''),
          vault: new FormControl(false),
          obstacleAspects: fb.array([ this.createObstacleAspect(), this.createObstacleAspect(), this.createObstacleAspect() ]),
          followerAspect: new FormControl('')
      }, {validators: [ followerAspectRequiredValidator ]});
  }

  createObstacleAspect(): FormGroup {
      return this.fb.group({
          obstacleAspect: new FormControl('')
      });
  }

  ngOnInit(): void {
      this.itemTypeFormControl.valueChanges.subscribe(typeVal => {
          this.loreSelected = (typeVal === 'Lore');
          this.influenceSelected = (typeVal === 'Influence');
          this.bookSelected = (typeVal === 'Book');

          const aspectsFormArray = this.form.get('aspects') as FormArray;
          aspectsFormArray.clear();
          if (this.hasAspects(typeVal)) {
              this.populateAspects();
              this.addAspect();
          }

          if (this.bookSelected) {
              this.service.getLanguages().then(list => this.languages = list);
          }
          if (typeVal === 'ExpeditionObstacle' || typeVal === 'Follower') {
              this.populateAspects();
          }
      });
  }

  private async populateAspects() {
      const queryResult = await this.getAspectsGQL.fetch().toPromise();
      this.aspects = queryResult.data.Aspect.map(aspect => aspect.name);
  }

  hasAspects(itemType: string): boolean {
      return this.itemTypesWithAspects.includes(itemType);
  }

  private createAspect(): FormGroup {
      return this.fb.group({
          aspect: new FormControl('', Validators.required),
          quantity: new FormControl('', Validators.required)
      });
  }

  public addAspect(): void {
      const rewards = this.form.get('aspects') as FormArray;
      rewards.push(this.createAspect());
  }

  save(): void {
      this.form.updateValueAndValidity();
      if (this.form.valid) {
          this.dialogRef.close(this.form.value);
      }
  }

  public removeAspect(index: number): void {
      const rewards = this.form.get('aspects') as FormArray;
      rewards.removeAt(index);
  }

  close(): void{
      this.dialogRef.close();
  }
}
