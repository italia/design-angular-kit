//Qs
//Aria hidden?
//state management with service?
//interface?

export interface TransferItem<ValueType> {
  text: string;
  value: ValueType;
}

export type TransferItemSelection<ValueType> = Array<TransferItem<ValueType>>;

export type SourceType = 'source' | 'target';
