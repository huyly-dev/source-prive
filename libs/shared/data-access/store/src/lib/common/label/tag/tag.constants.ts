import { CommonLabelTagState } from "./tag.state";


export const CommonLabelTagInitialState: CommonLabelTagState = {
  removable: false,
  oval: false,
  disabled: false,
  label: '',
  icon: undefined,
  iconPackage: undefined,
  extraClass: '',
  wrapperClass: 'wrapper-common-label__tag',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.LABEL.TAG'
};
