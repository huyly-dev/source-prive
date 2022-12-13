import { IOrganizationDataVM } from '@data-access-api';

export interface LandingFormContactState {
  type: LandingFormContactTypeEnum;
  showError: boolean;
}

export enum LandingFormContactTypeEnum {
  DONE,
  DEFAULT
}

export interface LandingFormContactRequest {
  data: IOrganizationDataVM;
  cb: () => void;
}
