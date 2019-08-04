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

export class AspectSearchGroupResult {
  label: string;
  entities: AspectSearchEntity[];
}

export class AspectSearchEntity {
  id: number;
  name: string;
  aspectQuantity: number;
}
