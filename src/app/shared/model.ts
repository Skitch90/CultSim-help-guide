export interface AspectQuantity {
  aspect: string;
  quantity: number;
}

export interface Entity {
  // db item ID
  id: number;
  // ID item in the board (multiple copies are possible)
  boardId?: string;
  name: string;
  label: string;
  aspects: AspectQuantity[];
}

export class EntitiesGroup {
  label: string;
  entities: EntitiesGroupItem[];
}

export class EntitiesGroupItem {
  id: number;
  name: string;
  label: string;
  aspect: string;
  aspectQuantity: number;
}
