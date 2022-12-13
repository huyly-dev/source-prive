import { NgModule } from '@angular/core';
import { PriveLandingHomeShellUIBannerComponent } from './containers';
import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { CommonModule } from '@angular/common';
import { NgtBoxGeometryModule, NgtBufferGeometryModule, NgtSphereGeometryModule } from '@angular-three/core/geometries';
import { NgtMeshBasicMaterialModule, NgtMeshPhongMaterialModule } from '@angular-three/core/materials';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtStatsModule } from '@angular-three/core/stats';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';

const CONTAINERS = [PriveLandingHomeShellUIBannerComponent];
const MODULES = [
  CommonModule,
  NgtCoreModule,
  NgtMeshModule,
  NgtSphereGeometryModule,
  NgtBoxGeometryModule,
  NgtMeshBasicMaterialModule,
  NgtStatsModule,
  NgtAmbientLightModule,
  NgtPointLightModule,
  NgtSobaOrbitControlsModule,
  NgtColorPipeModule,
  NgtSobaLoaderModule,
  NgtStatsModule,
  NgtMeshPhongMaterialModule,
  NgtBufferGeometryModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingHomeShellUIBannerModule {
}
