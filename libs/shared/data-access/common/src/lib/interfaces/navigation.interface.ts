import {
  CommonColorModel,
  CommonIconPackageModel,
  CommonIconTypeModel,
  CommonAvatarStyleModel
} from '../models';

export interface INavigationItem {
  label: string;
  key: string;
  value: any;
  showDropdown?: boolean;
  route?: string;
  items?: INavigationItem[];
  icon?: CommonIconTypeModel;
  package?: CommonIconPackageModel;
  style?: CommonAvatarStyleModel;
  color?: CommonColorModel;
  backgroundColor?: CommonColorModel;
}

export interface INavigationPart {
  label: string;
  items: INavigationItem[];
}
