import { ICON_REQUIRED_ERROR } from '../constants';

export class IconHelper {
  public static throwRequiredError(): void {
    throw new Error(ICON_REQUIRED_ERROR);
  }
}
