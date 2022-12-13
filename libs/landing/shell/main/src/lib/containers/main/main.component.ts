import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prive-landing',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingShellMainComponent {}
