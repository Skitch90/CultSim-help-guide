import { Injectable } from '@angular/core';
import { Dictionary } from 'lodash';
import { ItemCreator } from './item-creator';
import { SaveItemInput } from './item-creator.types';

@Injectable({
  providedIn: 'root'
})
export class ItemCreatorService {
  private itemCreators: Dictionary<ItemCreator> = {};

  constructor() { }

  addItemCreator(type: string, creator: ItemCreator) {
    this.itemCreators[type] = creator;
  }

  createItem = (item: SaveItemInput) => {
    const { itemType } = item;
    const itemCreator = this.itemCreators[itemType];
    if (itemCreator) {
      itemCreator.createItem(item);
    } else {
      console.error('No ItemCreator for type', itemType);
    }
  }
}
