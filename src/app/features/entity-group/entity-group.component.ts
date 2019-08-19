import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { EntitiesGroup, EntitiesGroupItem } from 'src/app/shared/model';
import { BoardService } from '../board/board.service';
import { GraphqlService } from '../graphql/graphql.service';

@Component({
  selector: 'app-entity-group',
  templateUrl: './entity-group.component.html',
  styleUrls: ['./entity-group.component.scss']
})
export class EntityGroupComponent implements OnInit {
  @Input() group: EntitiesGroup;
  @Input() aspect: string;
  @Input() type: string;

  constructor(private boardService: BoardService,
              private graphql: GraphqlService) {  }

  ngOnInit() { }

  addToBoard(entity: EntitiesGroupItem) {
    this.graphql.getEntities(entity.name).then(result => {
      const itemToAdd = result.find(item => item.name === entity.name);
      if (itemToAdd !== undefined) {
        this.boardService.addBoardItem(itemToAdd);
      } else {
        console.error(`No entities found with name "${entity.name}"`);
      }
    });
  }
}
