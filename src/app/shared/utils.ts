export interface AspectQuantity {
    aspect: String
    quantity: Number
  }

export interface Entity {
    name: String
    label: String
    aspects: AspectQuantity[]
}