import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({opacity: 0}),
    animate('300ms 300ms cubic-bezier(.57,0,1,.51)', style({opacity: 1, transform: 'translateY(0)'})),
  ]),
  transition(':leave', [
    animate('100ms cubic-bezier(.57,0,1,.51)', style({opacity: 0, transform: 'translateX(-10px)'})),
  ]),
]);

export const expandWidth = trigger('expandWidth', [
  state('expandWidth', style({width: '{{imgExpandWidth}}px'}), {params: {imgExpandWidth: 0}}),
  state('collapseWidth', style({width: '{{imgCollapseWidth}}px'}), {params: {imgCollapseWidth: 0}}),
  transition('expandWidth => collapseWidth', group([
    query('@expand', animateChild()),
    query('@fadeInOut', animateChild()),
    animate('300ms 100ms cubic-bezier(.65,0,.35,1)')
  ])),
  transition('collapseWidth => expandWidth', group([
    query('@expand', animateChild()),
    query('@fadeInOut', animateChild()),
    animate('300ms 100ms cubic-bezier(.65,0,.35,1)')
  ]))
])

export const expand = trigger('expand', [
  state('expanded', style({width: '{{imgExpandWidth}}px', height: '{{imgExpandHeight}}px'}),
      {params: {imgExpandWidth: 0, imgExpandHeight: 0}}
  ),
  state('collapsed', style({width: '{{imgCollapseWidth}}px', height: '{{imgCollapseHeight}}px'}),
      {params: {imgCollapseWidth: 0, imgCollapseHeight: 0}}
  ),
  transition('expanded => collapsed', group([
    query('@fadeInOutDescription', animateChild()),
    animate('300ms cubic-bezier(.65,0,.35,1)')
  ])),
  transition('collapsed => expanded', group([
    query('@fadeInOutDescription', animateChild()),
    animate('300ms cubic-bezier(.65,0,.35,1)')
  ]))
]);

export const fadeInOutDescription = trigger('fadeInOutDescription', [
  state('fadeIn', style({opacity: 1, transform: 'translateY(0)'})),
  state('fadeOut', style({opacity: 0, transform: 'translateX(-10px)'})),
  transition('fadeOut => fadeIn', animate('300ms 100ms cubic-bezier(.57,0,1,.51)')),
  transition('fadeIn => fadeOut', animate('100ms cubic-bezier(.57,0,1,.51)')),
]);
