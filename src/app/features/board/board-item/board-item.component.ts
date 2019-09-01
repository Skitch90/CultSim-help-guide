import { Component, OnInit, Input } from '@angular/core';
import { Entity, EntitiesGroup } from 'src/app/shared/model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AddRewardLocationDialogComponent } from '../../dialogs/add-reward-location-dialog/add-reward-location-dialog.component';
import { GraphqlService } from '../../graphql/graphql.service';
import { AddRewardBookDialogComponent } from '../../dialogs/add-reward-book-dialog/add-reward-book-dialog.component';
import { AddRewardMansusDialogComponent } from '../../dialogs/add-reward-mansus-dialog/add-reward-mansus-dialog.component';
import { AddMansusDoorOptionDialogComponent } from '../../dialogs/add-mansus-door-option-dialog/add-mansus-door-option-dialog.component';
import { AddInfluenceDecayDialogComponent } from '../../dialogs/add-influence-decay-dialog/add-influence-decay-dialog.component';
import { BoardService } from '../board.service';
import { AddLocationDialogComponent } from '../../dialogs/add-location-dialog/add-location-dialog.component';
import { AddObstacleLocationDialogComponent } from '../../dialogs/add-obstacle-location-dialog/add-obstacle-location-dialog.component';
import { map, tap } from 'rxjs/operators';
import {
  getGroupsFromLocation, getGroupsFromLore, getGroupsFromBook, getGroupsFromEntities, getGroupsFromInfluence,
  getGroupsFromTool, getGroupsFromIngredient, getGroupsFromMansusDoor
} from './board-item-detail-utils';
import { Observable } from 'rxjs';

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

  constructor(private dialog: MatDialog, private service: GraphqlService, private boardService: BoardService) { }

  ngOnInit() {
    const { name, label } = this.item;
    if (label === 'Aspect') {
      this.entities = this.service.getEntitiesByAspect(name).valueChanges.pipe(
        map(result => result.data.entityWithAspect),
        map(groups => getGroupsFromEntities(groups))
      );
    }
    if (label === 'Book') {
      this.entities = this.service.getBook(name).valueChanges.pipe(
        map(result => result.data.Book[0]),
        map(book => getGroupsFromBook(book))
      );
    }
    if (label === 'Influence') {
      this.entities = this.service.getInfluence(name).valueChanges.pipe(
        map(result => result.data.Influence[0]),
        map(influence => getGroupsFromInfluence(influence))
      );
    }
    if (label === 'Ingredient') {
      this.entities = this.service.getIngredient(name).valueChanges.pipe(
        map(result => result.data.Ingredient[0]),
        map(ingredient => getGroupsFromIngredient(ingredient))
      );
    }
    if (this.item.label === 'Location') {
      this.entities = this.service.getLocation(this.item.name).valueChanges.pipe(
        map(result => result.data.Location[0]),
        tap(location => this.vaultLocation = location.vault),
        map(val => getGroupsFromLocation(val))
      );
    }
    if (this.item.label === 'Lore') {
      this.entities = this.service.getLore(this.item.name).valueChanges.pipe(
        map(result => result.data.Lore[0]),
        tap(lore => this.secretHistoriesLore = lore.aspects.some(aspect => aspect.Aspect.name === 'Secret Histories')),
        map(val => getGroupsFromLore(val))
      );
    }
    if (label === 'MansusDoor') {
      this.entities = this.service.getMansusDoor(name).valueChanges.pipe(
        map(result => result.data.MansusDoor[0]),
        map(door => getGroupsFromMansusDoor(door))
      );
    }
    if (label === 'Tool') {
      this.entities = this.service.getTool(name).valueChanges.pipe(
        map(result => result.data.Tool[0]),
        map(tool => getGroupsFromTool(tool))
      );
    }
  }

  removeFromBoard(item: Entity) {
    this.boardService.removeBoardItem(item);
  }

  openAddRewardDialog(itemName: string, itemLabel: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    if (itemLabel === 'Location') {
      dialogConfig.data = {
        locationName: itemName
      };

      const dialogRef = this.dialog.open(AddRewardLocationDialogComponent,
        dialogConfig);


      dialogRef.afterClosed().subscribe(
        val => {
          if (val) {
            this.service.saveLocationReward(val);
          }
        });
    } else if (itemLabel === 'Book') {
      dialogConfig.data = {
        bookTitle: itemName
      };
      const dialogRef = this.dialog.open(AddRewardBookDialogComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(val => {
        if (val) {
          this.service.saveBookReward(val);
        }
      });
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

  openAddOptionDialog(itemName) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = {
      mansusDoor: itemName
    };
    const dialogRef = this.dialog.open(AddMansusDoorOptionDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(val => {
      if (val) {
        this.service.saveMansusDoorOption(val);
      }
    });
  }

  openAddInfluenceDecay(influence) {
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

  openAddLocationDialog(itemName) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = {
      secretHistory: itemName
    };
    const dialogRef = this.dialog.open(AddLocationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(val => {
      if (val) {
        this.service.saveSecretHistoryLocation(val);
      }
    });
  }

  openAddObstaclesDialog(itemName: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = {
      vault: itemName
    };
    const dialogRef = this.dialog.open(AddObstacleLocationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(val => {
      if (val) {
        this.service.saveLocationObstacle(val);
      }
    });
  }
}
