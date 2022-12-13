import { CommonSwitchState } from "./switch.state";

export const commonSwitchInitialState = <TData>(): CommonSwitchState<TData> => ({
  options: [],
  selected: undefined,
  extraClass: '',
  wrapperClass: 'wrapper-common-switch',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.SWITCH'
});
