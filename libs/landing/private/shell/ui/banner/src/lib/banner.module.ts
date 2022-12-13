import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveLandingPrivateShellUIBannerComponent } from './containers';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PriveLandingSharedUIButtonModule } from '@landing-shared-ui-button';

const MODULES = [CommonModule, PriveLandingSharedUIButtonModule, LazyLoadImageModule];

const CONTAINERS = [PriveLandingPrivateShellUIBannerComponent]

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [PriveLandingPrivateShellUIBannerComponent]
})
export class PriveLandingPrivateShellUiBannerModule {
}
