import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, Inject, ViewChild } from '@angular/core';
import { NgtCanvas } from '@angular-three/core';
import { DOCUMENT } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'prive-landing-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingHomeShellUIBannerComponent implements AfterViewInit {

  @ViewChild('background')
  public readonly background!: NgtCanvas;
  @ViewChild('earth')
  public readonly earth!: NgtCanvas;

  public vertices: { position: THREE.Vector3, scale: THREE.Vector3 }[] = [];

  constructor(
    @Inject(DOCUMENT)
    protected readonly documentRef: Document
  ) {
    for (let i = -5000; i < 5000; i += 20) {

      this.vertices.push({
        position: new THREE.Vector3(Math.random() * 1000 - 500, Math.random() * 1000 - 500, i),
        scale: new THREE.Vector3(2, 2)
      });
    }
  }

  public ngAfterViewInit(): void {
    const { offsetWidth, offsetHeight } = this.documentRef.body;
    this.background.size = {
      width: offsetWidth,
      height: offsetHeight
    }
    if (offsetWidth > 1023) {
      return;
    }
    this.earth.size = {
      width: 328,
      height: 328
    };
  }

  public turnAnimate(object: THREE.Object3D): void {
    object.rotation.y += 0.01;
  }

  public starAnimation(object: THREE.Object3D, index: number): void {
    object.position.z += index / 10;
    if (object.position.z > 1000) {
      object.position.z -= 2000;
    }
  }

  @HostListener('window:resize')
  public resize(): void {
    const { offsetWidth, offsetHeight } = this.documentRef.body;
    this.background.size = {
      width: offsetWidth,
      height: offsetHeight
    }
    if (offsetWidth > 1023) {
      this.earth.size = {
        width: 600,
        height: 600
      };
    } else {
      this.earth.size = {
        width: 328,
        height: 328
      };
    }
  }
}
