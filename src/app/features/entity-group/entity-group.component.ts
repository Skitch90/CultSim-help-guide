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

  constructor() {  }

  ngOnInit() { }

}
