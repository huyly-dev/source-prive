import { animate, sequence, state, style, transition, trigger } from '@angular/animations';

export const scaleImage = trigger('scaleImage', [
  state('scaleIn', style({transform: 'scale({{scaleDownRatio}})', transformOrigin: 'top left'}),
      {params: {scaleDownRatio: 1}}
  ),
  state('scaleOut',
      style({transform: 'scale({{scaleUpRatio}})', transformOrigin: 'top left'}),
      {params: {scaleUpRatio: 1.8}}
  ),
  transition('scaleIn <=> scaleOut', animate('400ms 50ms ease-in-out'))
]);

export const expandTitle = trigger('expandTitle', [
  state('collapsed', style({transform: 'translateX({{xAxis}}rem)'}), {params: {xAxis: 3.125}}),
  state('expanded', style({transform: 'translateY({{yAxis}}rem)'}), {params: {yAxis: 3.125}}),
  transition('collapsed <=> expanded', animate('400ms 50ms ease-in-out'))
]);

export const fadeDescription = trigger('fadeDescription', [
  transition(':enter', [
    style({transform: 'translateY(100%)', opacity: 0, height: '0px'}),
    animate('500ms 50ms cubic-bezier(.31,.06,.22,.97)', style({transform: 'translateY(0)', height: '*', opacity: 1})),
  ]),
  transition(':leave', [
    style({transform: 'translateY(0)', height: '*', opacity: 1}),
    sequence([
      animate('100ms ease-out', style({transform: 'translateY(50%)', opacity: 0.5})),
      animate('350ms ease-out', style({transform: 'translateY(100%)', height: '0px', opacity: 0})),
    ])
  ])
]);
