import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveCommonMaskComponent } from './components';

const MODULES = [CommonModule];
const COMPONENTS = [PriveCommonMaskComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS]
})
export class PriveCommonMaskModule {}
