import { Component, OnInit } from '@angular/core';
import { Entity } from '../../shared/utils';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { GraphqlService } from '../graphql/graphql.service';
import { AddRewardLocationDialogComponent } from '../dialogs/add-reward-location-dialog/add-reward-location-dialog.component';
import { AddRewardBookDialogComponent } from '../dialogs/add-reward-book-dialog/add-reward-book-dialog.component';
import { AddMansusDoorOptionDialogComponent } from '../dialogs/add-mansus-door-option-dialog/add-mansus-door-option-dialog.component';
import { AddRewardMansusDialogComponent } from '../dialogs/add-reward-mansus-dialog/add-reward-mansus-dialog.component';
import { AddInfluenceDecayDialogComponent } from '../dialogs/add-influence-decay-dialog/add-influence-decay-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardItems: Entity[] = [];

  constructor(private dialog: MatDialog,
    private service: GraphqlService) { }

  ngOnInit() {
  }

  getCardLabel(label) {
    if (label === 'MansusDoor') {
      return 'Mansus Door';
    } else if (label === 'MansusDoorOption') {
      return 'Mansus Door Option';
    } else {
      return label;
    }
  }

  removeFromBoard(itemName: String) {
    this.boardItems = this.boardItems.filter(item => item.name !== itemName);
  }

  openAddRewardDialog(itemName: String, itemLabel: String) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    if (itemLabel === "Location") {
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
    } else if (itemLabel === "Book") {
      dialogConfig.data = {
        bookTitle: itemName
      }
      const dialogRef = this.dialog.open(AddRewardBookDialogComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(val => {
        if (val) {
          this.service.saveBookReward(val);
        }
      })
    } else if (itemLabel === 'MansusDoorOption') {
      dialogConfig.data = {
        mansusDoorOption: itemName
      }

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
    }
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
    }

    const dialogRef = this.dialog.open(AddInfluenceDecayDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(val => {
      if (val) {
        this.service.saveInfluenceDecay(val);
      }
    });
  }
}

