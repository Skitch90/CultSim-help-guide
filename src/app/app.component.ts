import { Component, Injector, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Entity } from './shared/model';
import { debounceTime, tap, switchMap, filter, finalize, map } from 'rxjs/operators';
import { AddItemDialogComponent } from './features/dialogs/add-item-dialog/add-item-dialog.component';
import { BoardService } from './features/board/board.service';
import { DialogService } from './features/dialogs/dialog.service';
import { ItemCreatorService } from './features/graphql/item-creator/item-creator.service';
import { FollowerCreator, AspectCreator, ToolCreator, DesireCreator, ChangeLessonCreator, LocationCreator,
    ExpeditionObstacleCreator, BookCreator, LoreCreator, IngredientCreator, LanguageCreator, MansusDoorCreator,
    RiteCreator, InfluenceCreator, TutorCreator
} from './features/graphql/item-creator/item-creator';
import { isEntity } from './shared/utils';
import { GetEntityGQL } from './features/graphql/operations';
import * as Types from './features/graphql/types';

type SearchEntity = ({
    __typename?: 'SearchEntity';
} & Pick<Types.SearchEntity, 'name' | '_id' | 'label'> & {
    aspects: ({
        __typename?: 'AspectQuantity';
    } & Pick<Types.AspectQuantity, 'aspect' | 'quantity'>)[];
});

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CultSim-help-guide';
  searchTextControl = new FormControl();
  searchResults: Entity[];
  isLoading = false;

  constructor(private dialogService: DialogService,
              private injector: Injector,
              private boardService: BoardService,
              private itemCreatorService: ItemCreatorService,
              private getEntitiesGQL: GetEntityGQL) {
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
      this.searchTextControl.valueChanges.pipe(
          filter(value => !isEntity(value)),
          debounceTime(500),
          tap(() => {
              this.isLoading = true;
          }),
          switchMap(name => this.getEntitiesGQL.fetch({ name }).pipe(
              map(result => result.data.entityWithName),
              map(entities => this.convertToEntities(entities)),
              finalize(() => {
                  this.isLoading = false;
              })
          ))
      ).subscribe(data => this.searchResults = data);
  }

  private convertToEntities(entities: SearchEntity[]): Entity[] {
      return entities.map( ({ _id, name, label, aspects }) => ({
          id: +_id,
          name,
          label,
          aspects: aspects.map( ({ aspect, quantity }) => ({
              aspect, quantity
          }))
      }));
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
