import { Component, OnInit, Input, Injector } from '@angular/core';
import { Entity, EntitiesGroup } from 'src/app/shared/model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AddRewardLocationDialogComponent } from '../../dialogs/add-reward-location-dialog/add-reward-location-dialog.component';
import { GraphqlService } from '../../graphql/graphql.service';
import { AddRewardBookDialogComponent } from '../../dialogs/add-reward-book-dialog/add-reward-book-dialog.component';
import { AddRewardMansusDialogComponent } from '../../dialogs/add-reward-mansus-dialog/add-reward-mansus-dialog.component';
import { AddDoorOptionDialogComponent } from '../../dialogs/add-door-option-dialog/add-door-option-dialog.component';
import { AddInfluenceDecayDialogComponent } from '../../dialogs/add-influence-decay-dialog/add-influence-decay-dialog.component';
import { BoardService } from '../board.service';
import { AddLocationDialogComponent } from '../../dialogs/add-location-dialog/add-location-dialog.component';
import { AddObstacleLocationDialogComponent } from '../../dialogs/add-obstacle-location-dialog/add-obstacle-location-dialog.component';
import { Observable } from 'rxjs';
import { DialogService } from '../../dialogs/dialog.service';
import { BoardItemInitiatorService } from '../../graphql/board-item-initiator/board-item-initiator.service';
import { AddLoreUpgradeDialogComponent } from '../../dialogs/add-lore-upgrade-dialog/add-lore-upgrade-dialog.component';
import { AddDesireChangeDialogComponent } from '../../dialogs/add-desire-change-dialog/add-desire-change-dialog.component';
import { AspectInitiator, BookInitiator, FollowerInitiator, InfluenceInitiator, IngredientInitiator, LanguageInitiator,
    LocationInitiator, LoreInitiator } from '../../graphql/board-item-initiator/board-item-initiator';

@Component({
    selector: 'app-board-item',
    templateUrl: './board-item.component.html',
    styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  @Input() item: Entity;
  entities: Observable<EntitiesGroup[]>;

  secretHistoriesLore = false;
  vaultLocation = false;

  constructor(private dialogService: DialogService, private dialog: MatDialog,
              private service: GraphqlService, private boardService: BoardService,
              private itemInitService: BoardItemInitiatorService, injector: Injector) {
      itemInitService.addItemInitiator('Aspect', new AspectInitiator(injector));
      itemInitService.addItemInitiator('Follower', new FollowerInitiator(injector));
      itemInitService.addItemInitiator('Ingredient', new IngredientInitiator(injector));
      itemInitService.addItemInitiator('Location', new LocationInitiator(injector));
      itemInitService.addItemInitiator('Book', new BookInitiator(injector));
      itemInitService.addItemInitiator('Lore', new LoreInitiator(injector));
      itemInitService.addItemInitiator('Influence', new InfluenceInitiator(injector));
      itemInitService.addItemInitiator('Language', new LanguageInitiator(injector));
  }

  ngOnInit(): void {
      const initResult = this.itemInitService.initItem(this.item);
      if (initResult) {
          this.entities = initResult.entityGroups;
          this.vaultLocation = initResult.vaultLocation;
          this.secretHistoriesLore = initResult.secretHistoriesLore;
      }
      // const { name, label } = this.item;
      // if (label === 'MansusDoor') {
      //   this.entities = this.service.getMansusDoor(name).valueChanges.pipe(
      //     map(result => result.data.MansusDoor[0]),
      //     map(door => getGroupsFromMansusDoor(door))
      //   );
      // }
      // if (label === 'MansusDoorOption') {
      //   this.entities = this.service.getMansusDoorOption(name).valueChanges.pipe(
      //     map(result => result.data.MansusDoorOption[0]),
      //     map(doorOption => getGroupsFromMansusDoorOption(doorOption))
      //   );
      // }
      // if (label === 'Rite') {
      //   this.entities = this.service.getRite(name).valueChanges.pipe(
      //     map(result => result.data.Rite[0]),
      //     map(rite => getGroupsFromRite(rite))
      //   );
      // }
      // if (label === 'Tool') {
      //   this.entities = this.service.getTool(name).valueChanges.pipe(
      //     map(result => result.data.Tool[0]),
      //     map(tool => getGroupsFromTool(tool))
      //   );
      // }
  }

  removeFromBoard(item: Entity): void {
      this.boardService.removeBoardItem(item);
  }

  openAddRewardDialog(itemName: string, itemLabel: string): void {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '400px';

      if (itemLabel === 'Location') {
          this.dialogService.openDialog(AddRewardLocationDialogComponent, this.service.saveLocationReward, { locationName: itemName });
      } else if (itemLabel === 'Book') {
          this.dialogService.openDialog(AddRewardBookDialogComponent, this.service.saveBookReward, { bookTitle: itemName });
      } else if (itemLabel === 'MansusDoorOption') {
          dialogConfig.data = {
              mansusDoorOption: itemName
          };

          const dialogRef = this.dialog.open(AddRewardMansusDialogComponent, dialogConfig);
          dialogRef.afterClosed().subscribe(val => {
              if (val) {
                  this.service.saveMansusReward(val);
              }
          });
      }

  }

  openAddOptionDialog(itemName: string): void {
      this.dialogService.openDialog(AddDoorOptionDialogComponent,
          this.service.saveMansusDoorOption,
          { mansusDoor: itemName });
  }

  openAddDesireChangeDialog(itemName: string): void {
      this.dialogService.openDialog(AddDesireChangeDialogComponent,
          this.service.saveDesireChange,
          { desire: itemName});
  }

  openAddInfluenceDecay(influence: string): void {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '400px';
      dialogConfig.data = {
          influence
      };

      const dialogRef = this.dialog.open(AddInfluenceDecayDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(val => {
          if (val) {
              this.service.saveInfluenceDecay(val);
          }
      });
  }

  openAddLocationDialog(itemName: string): void {
      this.dialogService.openDialog(AddLocationDialogComponent, this.service.saveSecretHistoryLocation, { secretHistory: itemName });
  }

  openAddObstaclesDialog(itemName: string): void {
      this.dialogService.openDialog(AddObstacleLocationDialogComponent, this.service.saveLocationObstacle, { vault: itemName });
  }

  openAddUpgradeDialog(itemName: string): void {
      this.dialogService.openDialog(AddLoreUpgradeDialogComponent, this.service.setLoreUpgrade, { lore: itemName });
  }
}
