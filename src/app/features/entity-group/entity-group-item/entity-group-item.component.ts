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
  @ViewChild('nameListAspects', { static: false }) nameListAspectsTemplate: TemplateRef<any>;
  @ViewChild('aspectQuantity', { static: false }) aspectQuantityTemplate: TemplateRef<any>;
  @ViewChild('mansusOption', { static: false }) mansusOptionTemplate: TemplateRef<any>;

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
    } else if (this.groupType === 'Location') {
      if (itemType === 'Lore') {
        return this.nameAndAspectNumTemplate;
      } else if (itemType === 'ExpeditionObstacle') {
        return this.nameListAspectsTemplate;
      } else if (itemType === 'Book') {
        return this.nameAndTypeTemplate;
      } else if (itemType === 'Influence' || itemType === 'Ingredient' || itemType === 'Tool') {
        return this.nameTypeAspectTemplate;
      }
    } else if (this.groupType === 'Influence') {
      if (itemType === 'Location' || itemType === 'Book') {
        return this.nameAndTypeTemplate;
      } else if (itemType === 'MansusDoorOption') {
        return this.mansusOptionTemplate;
      } else if (itemType === 'Influence') {
        return this.nameTypeAspectTemplate;
      }
    }
    if (itemType === 'Aspect') {
      return this.aspectQuantityTemplate;
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
