import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BoardComponent } from './features/board/board.component';
import { Entity } from './shared/utils';
import { Apollo } from 'apollo-angular';

import { debounceTime, tap, switchMap, filter, finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GraphqlService } from './features/graphql/graphql.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from './features/dialogs/add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CultSim-help-guide';
  myControl = new FormControl();
  searchResults: Observable<Entity[]>;
  isLoading = false;

  constructor(private dialog: MatDialog,
    private service: GraphqlService) { }

  @ViewChild(BoardComponent, { static: false }) child;

  ngOnInit(): void {
    this.searchResults = this.myControl.valueChanges.pipe(
      filter(value => !this.isEntity(value)),
      debounceTime(500),
      tap(() => {
        this.isLoading = true;
      }),
      switchMap(value => this.service.getEntities(value)),
      finalize(() => {
        this.isLoading = false;
      })
    )
  }

  isEntity(item: String | Entity): item is Entity {
    return (<Entity>item).name !== undefined;
  }

  onKey(event): void {
    const value = this.myControl.value;
    if (event.key === 'Enter' && this.isEntity(value)) {
      this.addItemToBoard();
    }
  }

  addItemToBoard() {
    this.child.boardItems.push(this.myControl.value);
  }

  displayFn(user?: Entity): String | undefined {
    return user ? user.name : undefined;
  }

  saveItem() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    const dialogRef = this.dialog.open(AddItemDialogComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        if (val) {
          this.service.saveItem(val);
        }
      }

    );
  }
}
