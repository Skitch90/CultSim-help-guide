import { Component, Injector, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Entity } from './shared/model';

import { debounceTime, tap, switchMap, filter, finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GraphqlService } from './features/graphql/graphql.service';
import { AddItemDialogComponent } from './features/dialogs/add-item-dialog/add-item-dialog.component';
import { BoardService } from './features/board/board.service';
import { DialogService } from './features/dialogs/dialog.service';
import { ItemCreatorService } from './features/graphql/item-creator/item-creator.service';
import { FollowerCreator, AspectCreator, ToolCreator, DesireCreator, ChangeLessonCreator, LocationCreator, ExpeditionObstacleCreator } from './features/graphql/item-creator/item-creator';
import { isEntity } from './shared/utils';

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

  constructor(private dialogService: DialogService,
              private service: GraphqlService,
              private injector: Injector,
              private boardService: BoardService,
              private itemCreatorService: ItemCreatorService) {
    itemCreatorService.addItemCreator('Follower', new FollowerCreator(this.injector));
    itemCreatorService.addItemCreator('Aspect', new AspectCreator(injector));
    itemCreatorService.addItemCreator('Tool', new ToolCreator(injector));
    itemCreatorService.addItemCreator('Desire', new DesireCreator(injector));
    itemCreatorService.addItemCreator('ChangeLesson', new ChangeLessonCreator(injector));
    itemCreatorService.addItemCreator('Location', new LocationCreator(injector));
    itemCreatorService.addItemCreator('ExpeditionObstacle', new ExpeditionObstacleCreator(injector));
  }


  ngOnInit(): void {
    this.searchResults = this.myControl.valueChanges.pipe(
      filter(value => !isEntity(value)),
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



  onKey(event): void {
    if (event.key === 'Enter') {
      this.addItemToBoard();
    }
  }

  addItemToBoard() {
    const value = this.myControl.value;
    if (isEntity(value)) {
      this.boardService.addBoardItem(value);
    }
  }

  displayFn(item?: Entity): string | undefined {
    return item ? item.name : undefined;
  }

  saveItem() {
    this.dialogService.openDialog(AddItemDialogComponent, this.itemCreatorService.createItem);
  }
}
