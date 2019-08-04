import { Component, OnInit, Input } from '@angular/core';
import { Entity, AspectSearchGroupResult } from 'src/app/shared/model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AddRewardLocationDialogComponent } from '../../dialogs/add-reward-location-dialog/add-reward-location-dialog.component';
import { GraphqlService } from '../../graphql/graphql.service';
import { AddRewardBookDialogComponent } from '../../dialogs/add-reward-book-dialog/add-reward-book-dialog.component';
import { AddRewardMansusDialogComponent } from '../../dialogs/add-reward-mansus-dialog/add-reward-mansus-dialog.component';
import { AddMansusDoorOptionDialogComponent } from '../../dialogs/add-mansus-door-option-dialog/add-mansus-door-option-dialog.component';
import { AddInfluenceDecayDialogComponent } from '../../dialogs/add-influence-decay-dialog/add-influence-decay-dialog.component';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  @Input() item: Entity;
  entities: AspectSearchGroupResult[];

  constructor(private dialog: MatDialog, private service: GraphqlService, private boardService: BoardService) { }

  ngOnInit() {
    if (this.item.label === 'Aspect') {
      this.service.getEntitiesByAspect(this.item.name).then(entities => {
        this.entities = entities;
      });
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
}