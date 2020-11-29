import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef, AfterViewInit, ElementRef} from '@angular/core';
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
  @ViewChild('onlyName') onlyNameTemplate: TemplateRef<ElementRef>;
  @ViewChild('nameAndAspectNum') nameAndAspectNumTemplate: TemplateRef<ElementRef>;
  @ViewChild('nameAndType') nameAndTypeTemplate: TemplateRef<ElementRef>;
  @ViewChild('nameTypeAspect') nameTypeAspectTemplate: TemplateRef<ElementRef>;
  @ViewChild('nameListAspects') nameListAspectsTemplate: TemplateRef<ElementRef>;
  @ViewChild('aspectQuantity') aspectQuantityTemplate: TemplateRef<ElementRef>;
  @ViewChild('mansusOption') mansusOptionTemplate: TemplateRef<ElementRef>;

  /**
   *  Configuration that associates the couple <groupType, itemType> to a function that returns the template to use.
   *  A configuration entry can use the word 'default' instead of a specific ItemType.
   *  In this case the associated function is used as default for that groupType
   */
  private readonly templateConfig = {
      Aspect_Follower: () => this.onlyNameTemplate,
      Aspect_default: () => this.nameAndAspectNumTemplate,
      Book_Language: () => this.onlyNameTemplate,
      Book_Location: () => this.onlyNameTemplate,
      Book_default: () => {
          const { aspect, aspectQuantity } = this.item;
          if (aspect && aspectQuantity) {
              return this.nameTypeAspectTemplate;
          } else {
              return this.nameAndTypeTemplate;
          }
      },
      Influence_Aspect: () => this.aspectQuantityTemplate,
      Influence_Book: () => this.nameAndTypeTemplate,
      Influence_Influence: () => this.nameTypeAspectTemplate,
      Influence_Location: () => this.nameAndTypeTemplate,
      Influence_MansusDoorOption: () => this.mansusOptionTemplate,
      Ingredient_Aspect: () => this.aspectQuantityTemplate,
      Ingredient_Location: () => this.nameAndTypeTemplate,
      Ingredient_MansusDoorOption: () => this.mansusOptionTemplate,
      Language_Book: () => this.nameAndTypeTemplate,
      Language_MansusDoorOption: () => this.mansusOptionTemplate,
      Location_Book: () => this.nameAndTypeTemplate,
      Location_ExpeditionObstacle: () => this.nameListAspectsTemplate,
      Location_Influence: () => this.nameTypeAspectTemplate,
      Location_Ingredient: () => this.nameTypeAspectTemplate,
      Location_Lore: () => this.nameAndAspectNumTemplate,
      Location_Tool: () => this.nameTypeAspectTemplate,
      Lore_Aspect: () => this.aspectQuantityTemplate,
      Lore_Book: () => this.nameAndTypeTemplate,
      Lore_Lore: () => this.nameAndAspectNumTemplate,
      Lore_MansusDoorOption: () => this.mansusOptionTemplate,
      MansusDoorOption_Influence: () => this.nameTypeAspectTemplate,
      MansusDoorOption_Ingredient: () => this.nameTypeAspectTemplate,
      MansusDoorOption_Language: () => this.nameAndTypeTemplate,
      MansusDoorOption_Lore: () => this.nameTypeAspectTemplate,
      Tool_Aspect: () => this.aspectQuantityTemplate,
      Tool_Book: () => this.nameAndTypeTemplate,
      Tool_Location: () => this.nameAndTypeTemplate
  };

  constructor(
    private cd: ChangeDetectorRef,
    private boardService: BoardService,
    private graphql: GraphqlService) { }

    private readonly DEFAULT_TEMPLATE_CONFIG = () => this.onlyNameTemplate;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.cd.detectChanges();
    }

    itemTemplate(): TemplateRef<ElementRef> {
        const dataFromConfig = this.templateConfig[`${this.groupType}_${this.item.label}`]
          || this.templateConfig[`${this.groupType}_default`]
          || this.DEFAULT_TEMPLATE_CONFIG;
        return dataFromConfig();
    }

    addToBoard(entity: EntitiesGroupItem): void {
        this.graphql.getEntities(entity.name).then(result => {
            const itemToAdd = result.find(item => item.name === entity.name && item.label === entity.label);
            if (itemToAdd !== undefined) {
                this.boardService.addBoardItem(itemToAdd);
            } else {
                console.error(`No entities found with name "${entity.name}"`);
            }
        });
    }
}
