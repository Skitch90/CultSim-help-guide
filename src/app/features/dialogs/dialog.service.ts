import { Injectable, Injector, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(readonly dialog: MatDialog, readonly injector: Injector) { }

    openDialog<D, R, DD>(dialogComponent: ComponentType<D> | TemplateRef<D>, onCloseFunction: (result: R) => void, dialogData?: DD): void {
        const dialogConfig = new MatDialogConfig<DD>();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '400px';
        if (dialogData) {
            dialogConfig.data = dialogData;
        }
        const dialogRef = this.dialog.open(dialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((val: R) => {
            if (val) {
                onCloseFunction(val);
            }
        });
    }
}
