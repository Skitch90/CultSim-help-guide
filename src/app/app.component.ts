import { Component, Injector, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Entity } from './shared/model';
import { debounceTime, tap, switchMap, filter, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GraphqlService } from './features/graphql/graphql.service';
import { AddItemDialogComponent } from './features/dialogs/add-item-dialog/add-item-dialog.component';
import { BoardService } from './features/board/board.service';
import { DialogService } from './features/dialogs/dialog.service';
import { ItemCreatorService } from './features/graphql/item-creator/item-creator.service';
import { FollowerCreator, AspectCreator, ToolCreator, DesireCreator, ChangeLessonCreator, LocationCreator,
    ExpeditionObstacleCreator, BookCreator, LoreCreator, IngredientCreator, LanguageCreator, MansusDoorCreator,
    RiteCreator, InfluenceCreator, TutorCreator
} from './features/graphql/item-creator/item-creator';
import { isEntity } from './shared/utils';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CultSim-help-guide';
  searchTextControl = new FormControl();
  searchResults: Observable<Entity[]>;
  isLoading = false;

  constructor(private dialogService: DialogService,
              private service: GraphqlService,
              private injector: Injector,
              private boardService: BoardService,
              private itemCreatorService: ItemCreatorService) {
      itemCreatorService.addItemCreator('Aspect', new AspectCreator(injector));
      itemCreatorService.addItemCreator('Book', new BookCreator(injector));
      itemCreatorService.addItemCreator('ChangeLesson', new ChangeLessonCreator(injector));
      itemCreatorService.addItemCreator('Desire', new DesireCreator(injector));
      itemCreatorService.addItemCreator('ExpeditionObstacle', new ExpeditionObstacleCreator(injector));
      itemCreatorService.addItemCreator('Follower', new FollowerCreator(this.injector));
      itemCreatorService.addItemCreator('Ingredient', new IngredientCreator(injector));
      itemCreatorService.addItemCreator('Location', new LocationCreator(injector));
      itemCreatorService.addItemCreator('Lore', new LoreCreator(injector));
      itemCreatorService.addItemCreator('Tool', new ToolCreator(injector));
      itemCreatorService.addItemCreator('Language', new LanguageCreator(injector));
      itemCreatorService.addItemCreator('MansusDoor', new MansusDoorCreator(injector));
      itemCreatorService.addItemCreator('Rite', new RiteCreator(injector));
      itemCreatorService.addItemCreator('Influence', new InfluenceCreator(injector));
      itemCreatorService.addItemCreator('Tutor', new TutorCreator(injector));
  }


  ngOnInit(): void {
      this.searchResults = this.searchTextControl.valueChanges.pipe(
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

  addItemToBoard(): void {
      const value = this.searchTextControl.value;
      if (isEntity(value)) {
          this.boardService.addBoardItem(value);
      }
  }

  displayFn(item?: Entity): string | undefined {
      return item ? item.name : undefined;
  }

  saveItem(): void {
      this.dialogService.openDialog(AddItemDialogComponent, this.itemCreatorService.createItem);
  }
}
