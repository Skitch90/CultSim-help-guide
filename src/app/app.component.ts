import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Entity } from './shared/model';

import { debounceTime, tap, switchMap, filter, finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GraphqlService } from './features/graphql/graphql.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from './features/dialogs/add-item-dialog/add-item-dialog.component';
import { BoardService } from './features/board/board.service';

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
              private service: GraphqlService,
              private boardService: BoardService) { }


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
    );
  }

  isEntity(item: string | Entity): item is Entity {
    return (item as Entity).name !== undefined;
  }

  onKey(event): void {
    if (event.key === 'Enter') {
      this.addItemToBoard();
    }
  }

  addItemToBoard() {
    const value = this.myControl.value;
    if (this.isEntity(value)) {
      this.boardService.addBoardItem(value);
    }
  }

  displayFn(item?: Entity): string | undefined {
    return item ? item.name : undefined;
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
