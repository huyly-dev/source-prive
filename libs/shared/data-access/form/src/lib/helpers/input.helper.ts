import { INPUT_REQUIRED_ERROR } from '../constants';

export class InputHelper {
  public static throwRequiredError(): void {
    throw new Error(INPUT_REQUIRED_ERROR);
  }
}
