import { Component, OnInit, Input } from '@angular/core';
import { Entity, EntitiesGroup, EntitiesGroupItem } from 'src/app/shared/model';
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

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  @Input() item: Entity;
  entities: EntitiesGroup[] = [];

  secretHistoriesLore = false;
  vaultLocation = false;

  constructor(private dialog: MatDialog, private service: GraphqlService, private boardService: BoardService) { }

  ngOnInit() {
    if (this.item.label === 'Aspect') {
      this.service.getEntitiesByAspect(this.item.name).then(entities => {
        this.entities = entities;
      });
    }
    if (this.item.label === 'Book') {
      this.service.getBook(this.item.name).then(books => {
        const { foundInLocation, language, teachesLanguage, studiedIntoLore, teachesRitual, resultsInInfluence } = books[0];
        if (foundInLocation.length > 0) {
          this.entities.push({
            label: 'Found In',
            entities: foundInLocation.map(location => {
              return this.convertToGroupItem(location.Location);
            })
          });
        }
        if (language !== null) {
          this.entities.push({
            label: 'Need Translation from',
            entities: [this.convertToGroupItem(language)]
          });
        }
        if (teachesLanguage !== null) {
          this.entities.push({
            label: 'Rewards',
            entities: [this.convertToGroupItem(teachesLanguage)]
          });
        } else {
          const loreRewards = studiedIntoLore.map(lore => {
            return this.convertToGroupItem(lore);
          });
          const riteReward = (teachesRitual !== null) ? [ this.convertToGroupItem(teachesRitual) ] : [];
          const influenceRewards = resultsInInfluence.map(influnce => {
            return this.convertToGroupItem(influnce);
          });
          const rewards = [
            ...loreRewards,
            ...riteReward,
            ...influenceRewards
          ];
          if (rewards.length > 0) {
            this.entities.push({
              label: 'Rewards',
              entities: rewards
            });
          }
        }
      });
    }
    if (this.item.label === 'Lore') {
      this.service.getLore(this.item.name).then(lores => {
        const { aspects, exploreResults } = lores[0];
        this.secretHistoriesLore = aspects.some(aspect => aspect.Aspect.name === 'Secret Histories');
        if (exploreResults.length > 0) {
          this.entities.push({
            label: 'Vaults',
            entities: exploreResults.map(vault => this.convertToGroupItem(vault))
          });
        }
      });
    }
    if (this.item.label === 'Location') {
      this.service.getLocation(this.item.name).then(locations => locations[0]).then(location => {
        const { vault, histories, obstacles, bookRewards, influenceRewards, ingredientRewards, toolRewards } = location;
        this.vaultLocation = vault;
        if (histories.length > 0) {
          this.entities.push({
            label: 'From histories',
            entities: histories.map(history => this.convertToGroupItem(history))
          });
        }
        if (obstacles.length > 0) {
          this.entities.push({
            label: 'Obstacles',
            entities: obstacles.map(obstacle => {
              const { _id, name, __typename, defeatedWith} = obstacle;
              return {
                id: _id,
                name,
                label: __typename,
                aspects: defeatedWith.map(item => item.name)
              };
            })
          });
        }
        if (bookRewards.length || influenceRewards.length || ingredientRewards.length || toolRewards.length) {
          const rewards = [...bookRewards, ...influenceRewards, ...ingredientRewards, ...toolRewards];
          const groupItems = rewards.map(item => this.convertToGroupItem(item));
          this.entities.push({
            label: 'Rewards',
            entities: groupItems
          });
        }
      });
    }
  }

  private convertToGroupItem(item): EntitiesGroupItem {
    const { aspects } = item;
    const aspect = (aspects !== undefined && aspects.length === 1) ? aspects[0] : null;
    return {
      id: item._id,
      name: item.name,
      label: item.__typename,
      aspect: (aspect && aspect.Aspect) ? aspect.Aspect.name : null,
      aspectQuantity: aspect !== null ? aspect.quantity : null
    };
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
