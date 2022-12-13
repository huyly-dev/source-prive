import { IconPipe } from './icon.pipe';
import { REQUIRED_ERROR } from '../../constants';
import { CommonIconAlertEnum, CommonIconPackageEnum } from '@ui-common-icon';

describe('IconPipe', () => {
  it('create an instance', () => {
    const pipe = new IconPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it ('No Icon Input must throw Error', () => {
      const pipe = new IconPipe();
      expect(() => {
        pipe.transform(undefined, undefined);
      }).toThrowError(REQUIRED_ERROR);
    });

    describe ('Have Icon must match case ', () => {
      it ('undefined package', () => {
        const pipe = new IconPipe();
        const value = pipe.transform(CommonIconAlertEnum.InfoItalicOutline, undefined);;
        expect(value).toBe('assets/icons/info_italic_outline.svg');
      });
      it ('have package', () => {
        const pipe = new IconPipe();
        const value = pipe.transform(CommonIconAlertEnum.InfoItalicOutline, CommonIconPackageEnum.Alert);;
        expect(value).toBe('assets/icons/alert/info_italic_outline.svg');
      });
    });
  });
});
