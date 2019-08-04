import { Injectable } from '@angular/core';
import { Entity } from 'src/app/shared/model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boardItems: Entity[] = [];

  constructor() { }

  getBoardItems(): Observable<Entity[]> {
    return of(this.boardItems);
  }

  addBoardItem(item: Entity) {
    const itemId = item.id;
    const occurencesCount = this.boardItems.reduce((prev, curr) => {
      if (curr.id === itemId) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
    this.boardItems.push({
      ...item,
      boardId: `${itemId}_${(occurencesCount + 1)}`
    });
  }

  removeBoardItem(item: Entity) {
    const index = this.boardItems.indexOf(item);
    if (index !== -1) {
      this.boardItems.splice(index, 1);
    }
  }
}
