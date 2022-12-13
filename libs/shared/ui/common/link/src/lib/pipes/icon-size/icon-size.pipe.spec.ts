import { PriveCommonLinkIconSizePipe } from './icon-size.pipe';
import { CommonLinkSizeEnum, CommonIconSizeEnum } from '@data-access-common';

describe('PriveCommonLinkIconSizePipe', () => {
  it('create an instance', () => {
    const pipe = new PriveCommonLinkIconSizePipe();
    expect(pipe).toBeTruthy();
  });

  it('Size XS should return Icon Size XS', () => {
    const pipe = new PriveCommonLinkIconSizePipe();
    const value = pipe.transform(CommonLinkSizeEnum.XS)
    expect(value).toEqual(CommonIconSizeEnum.S);
  });

  it('Size S should return Icon Size XS', () => {
    const pipe = new PriveCommonLinkIconSizePipe();
    const value = pipe.transform(CommonLinkSizeEnum.S)
    expect(value).toEqual(CommonIconSizeEnum.S);
  });

  it('Size M should return Icon Size S', () => {
    const pipe = new PriveCommonLinkIconSizePipe();
    const value = pipe.transform(CommonLinkSizeEnum.M)
    expect(value).toEqual(CommonIconSizeEnum.S);
  });

  it('Size L should return Icon Size S', () => {
    const pipe = new PriveCommonLinkIconSizePipe();
    const value = pipe.transform(CommonLinkSizeEnum.L)
    expect(value).toEqual(CommonIconSizeEnum.M);
  });

});
