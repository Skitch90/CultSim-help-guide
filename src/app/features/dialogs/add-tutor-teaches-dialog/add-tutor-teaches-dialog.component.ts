import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GetLanguageDocument, GetLanguagesGQL, GetTutorDocument, SetLanguageFromTutorGQL } from 'src/app/features/graphql/operations';
import { filterOptions } from 'src/app/shared/utils';

interface AddTutorTeachesDialogComponentData {
  tutor: string;
}

interface AddTutorTeachesDialogResult {
  tutor: string;
  language: string;
}

export const processTutorTeachesDialogResult = async (injector: Injector, result: AddTutorTeachesDialogResult): Promise<void> => {
    const { tutor, language } = result;
    const setLanguageFromTutorGQL = injector.get(SetLanguageFromTutorGQL);
    await setLanguageFromTutorGQL.mutate(
        result,
        { refetchQueries: [
            { query: GetLanguageDocument, variables: { name: language }},
            { query: GetTutorDocument, variables: { name: tutor } }
        ]}
    ).toPromise();
};

@Component({
    selector: 'app-add-tutor-teaches-dialog',
    templateUrl: './add-tutor-teaches-dialog.component.html',
    styleUrls: ['./add-tutor-teaches-dialog.component.scss']
})
export class AddTutorTeachesDialogComponent implements OnInit {
  form: FormGroup;

  languages: string[] = [];
  filteredLanguages: Observable<string[]>;
  languageFormControl = new FormControl('', Validators.required);

  constructor(
      private getLanguagesGQL: GetLanguagesGQL,
      readonly formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<AddTutorTeachesDialogComponent>,
      @Inject(MAT_DIALOG_DATA) { tutor }: AddTutorTeachesDialogComponentData
  ) {
      this.form = formBuilder.group({
          tutor: new FormControl(tutor),
          language: this.languageFormControl
      });
  }

  ngOnInit(): void {
      this.getLanguagesGQL.fetch().toPromise()
          .then((result) => result.data.Language.map(language => language.name))
          .then(languages => this.languages = languages)
          .then(() => this.filteredLanguages = this.languageFormControl.valueChanges.pipe(
              startWith(''),
              map((newValue) => filterOptions(this.languages, newValue))
          ));
  }

  save(): void {
      this.form.updateValueAndValidity();
      if (this.form.valid) {
          this.dialogRef.close(this.form.getRawValue());
      }
  }

  close(): void {
      this.dialogRef.close();
  }
}
