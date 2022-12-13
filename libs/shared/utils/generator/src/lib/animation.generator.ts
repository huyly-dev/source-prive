import { OverlayCdkAnimationEnum, OverlayCdkPositionEnum, OverlayCdkPositionModel } from '@data-access-overlay';

export function animation(position: OverlayCdkPositionModel, type: 'remove'): string;
export function animation(position: OverlayCdkPositionModel, type: 'add'): string;
export function animation(position: OverlayCdkPositionModel, type: 'remove' | 'add'): string {
  switch (position) {
    default:
      return type === 'add' ? OverlayCdkAnimationEnum.ToTop : OverlayCdkAnimationEnum.ExitTop;
    case OverlayCdkPositionEnum.TopRight:
      return type === 'add' ? OverlayCdkAnimationEnum.ToRight : OverlayCdkAnimationEnum.ExitRight;
    case OverlayCdkPositionEnum.TopLeft:
      return type === 'add' ? OverlayCdkAnimationEnum.ToLeft : OverlayCdkAnimationEnum.ExitLeft;
    case OverlayCdkPositionEnum.Bottom:
      return type === 'add' ? OverlayCdkAnimationEnum.ToBottom : OverlayCdkAnimationEnum.ExitBottom;
    case OverlayCdkPositionEnum.BottomLeft:
      return type === 'add' ? OverlayCdkAnimationEnum.ToLeft : OverlayCdkAnimationEnum.ExitLeft;
    case OverlayCdkPositionEnum.BottomRight:
      return type === 'add' ? OverlayCdkAnimationEnum.ToRight : OverlayCdkAnimationEnum.ExitRight;
    case OverlayCdkPositionEnum.Left:
      return type === 'add' ? OverlayCdkAnimationEnum.ToLeft : OverlayCdkAnimationEnum.ExitLeft;
    case OverlayCdkPositionEnum.Right:
      return type === 'add' ? OverlayCdkAnimationEnum.ToRight : OverlayCdkAnimationEnum.ExitRight;
  }
}
