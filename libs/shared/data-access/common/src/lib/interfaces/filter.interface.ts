export interface IFilterOption<TValue> {
  readonly label: string;
  readonly key: string;
  readonly disabled?: boolean;
  readonly value?: TValue;
}
