import { Injectable } from '@angular/core';
import { Dictionary } from 'lodash';
import { Entity } from 'src/app/shared/model';
import { ItemInitiator } from './board-item-initiator';

@Injectable({
  providedIn: 'root'
})
export class BoardItemInitiatorService {
  private itemInitiator: Dictionary<ItemInitiator> = {};

  constructor() { }

  addItemInitiator(type: string, initiator: ItemInitiator) {
    this.itemInitiator[type] = initiator;
  }

  initItem = (entity: Entity) => {
    const { name, label } = entity;
    const itemInitiator = this.itemInitiator[label];
    if (itemInitiator) {
      return itemInitiator.initBoardItem(name);
    } else {
      console.error('No ItemInitiator for type', label);
    }
  }
}
