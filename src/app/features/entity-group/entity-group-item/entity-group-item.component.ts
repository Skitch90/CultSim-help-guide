import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { EntitiesGroupItem } from 'src/app/shared/model';
import { BoardService } from '../../board/board.service';
import { GraphqlService } from '../../graphql/graphql.service';

@Component({
  selector: 'app-entity-group-item',
  templateUrl: './entity-group-item.component.html',
  styleUrls: ['./entity-group-item.component.scss']
})
export class EntityGroupItemComponent implements OnInit, AfterViewInit {
  @Input() groupType: string;
  @Input() item: EntitiesGroupItem;

  // Templates
  @ViewChild('onlyName', { static: false }) onlyNameTemplate: TemplateRef<any>;
  @ViewChild('nameAndAspectNum', { static: false }) nameAndAspectNumTemplate: TemplateRef<any>;
  @ViewChild('nameAndType', { static: false }) nameAndTypeTemplate: TemplateRef<any>;
  @ViewChild('nameTypeAspect', { static: false }) nameTypeAspectTemplate: TemplateRef<any>;

  constructor(
    private cd: ChangeDetectorRef,
    private boardService: BoardService,
    private graphql: GraphqlService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  itemTemplate(): TemplateRef<any> {
    const itemType = this.item.label;
    if (this.groupType === 'Aspect') {
      if (itemType === 'Follower') {
        return this.onlyNameTemplate;
      } else {
        return this.nameAndAspectNumTemplate;
      }
    } else if (this.groupType === 'Book') {
      if (itemType === 'Language' || itemType === 'Location') {
        return this.onlyNameTemplate;
      } else {
        const { aspect, aspectQuantity } = this.item;
        if (aspect && aspectQuantity) {
          return this.nameTypeAspectTemplate;
        } else {
          return this.nameAndTypeTemplate;
        }
      }
    }
    return this.onlyNameTemplate;
  }

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
