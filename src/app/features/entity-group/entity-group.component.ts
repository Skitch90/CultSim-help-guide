import { Component, OnInit, Input } from '@angular/core';
import { AspectSearchGroupResult, AspectSearchEntity } from 'src/app/shared/model';
import { BoardService } from '../board/board.service';
import { GraphqlService } from '../graphql/graphql.service';

@Component({
  selector: 'app-entity-group',
  templateUrl: './entity-group.component.html',
  styleUrls: ['./entity-group.component.scss']
})
export class EntityGroupComponent implements OnInit {
  @Input() group: AspectSearchGroupResult;
  @Input() aspect: string;

  constructor(private boardService: BoardService,
              private graphql: GraphqlService) { }

  ngOnInit() {
  }

  addToBoard(entity: AspectSearchEntity) {
    this.graphql.getEntities(entity.name).then(result => {
      const itemToAdd = result.find(item => item.name === entity.name);
      if (itemToAdd !== undefined) {
        console.log('adding item', itemToAdd);
        this.boardService.addBoardItem(itemToAdd);
      } else {
        console.error(`No entities found with name "${entity.name}"`);
      }
    });
  }
}
