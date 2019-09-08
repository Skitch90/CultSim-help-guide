import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog<T>(dialogComponent: ComponentType<T> | TemplateRef<T>, onCloseFunction: any, dialogData?: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    if (dialogData) {
      dialogConfig.data = dialogData;
    }
    const dialogRef = this.dialog.open(dialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(val => {
      if (val) {
        onCloseFunction(val);
      }
    });
  }
}
