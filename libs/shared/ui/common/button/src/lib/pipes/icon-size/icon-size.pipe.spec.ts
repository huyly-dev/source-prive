import { ButtonIconSizePipe, LinkIconSizePipe } from './icon-size.pipe';
import { CommonButtonSizeEnum, CommonIconSizeEnum } from '@data-access-common';

describe('LinkIconSizePipe', () => {
  it('create an instance', () => {
    const pipe = new LinkIconSizePipe();
    expect(pipe).toBeTruthy();
  });

  it('Size XS should return Icon Size XS', () => {
    const pipe = new LinkIconSizePipe();
    const value = pipe.transform(CommonButtonSizeEnum.XS)
    expect(value).toEqual(CommonIconSizeEnum.S);
  });

  it('Size S should return Icon Size XS', () => {
    const pipe = new LinkIconSizePipe();
    const value = pipe.transform(CommonButtonSizeEnum.S)
    expect(value).toEqual(CommonIconSizeEnum.S);
  });

  it('Size M should return Icon Size S', () => {
    const pipe = new LinkIconSizePipe();
    const value = pipe.transform(CommonButtonSizeEnum.M)
    expect(value).toEqual(CommonIconSizeEnum.S);
  });

  it('Size L should return Icon Size S', () => {
    const pipe = new LinkIconSizePipe();
    const value = pipe.transform(CommonButtonSizeEnum.L)
    expect(value).toEqual(CommonIconSizeEnum.M);
  });

  it('Size XL should return Icon Size M', () => {
    const pipe = new LinkIconSizePipe();
    const value = pipe.transform(CommonButtonSizeEnum.XL)
    expect(value).toEqual(CommonIconSizeEnum.S);
  });
});

describe('ButtonIconSizePipe', () => {
  it('create an instance', () => {
    const pipe = new ButtonIconSizePipe();
    expect(pipe).toBeTruthy();
  });

  it('Size XS should return Icon Size XS', () => {
    const pipe = new LinkIconSizePipe();
    const value = pipe.transform(CommonButtonSizeEnum.XS)
    expect(value).toEqual(CommonIconSizeEnum.XS);
  });

  it('Size S should return Icon Size XS', () => {
    const pipe = new LinkIconSizePipe();
    const value = pipe.transform(CommonButtonSizeEnum.S)
    expect(value).toEqual(CommonIconSizeEnum.XS);
  });

  it('Size M should return Icon Size S', () => {
    const pipe = new LinkIconSizePipe();
    const value = pipe.transform(CommonButtonSizeEnum.M)
    expect(value).toEqual(CommonIconSizeEnum.S);
  });

  it('Size L should return Icon Size S', () => {
    const pipe = new LinkIconSizePipe();
    const value = pipe.transform(CommonButtonSizeEnum.L)
    expect(value).toEqual(CommonIconSizeEnum.S);
  });

  it('Size XL should return Icon Size M', () => {
    const pipe = new LinkIconSizePipe();
    const value = pipe.transform(CommonButtonSizeEnum.XL)
    expect(value).toEqual(CommonIconSizeEnum.M);
  });
});
