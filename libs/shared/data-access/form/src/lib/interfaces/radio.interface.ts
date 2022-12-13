export interface IRadioOption<TValue> {
  readonly label: string;
  readonly key: string;
  readonly disabled?: boolean;
  readonly value: TValue;
}
