import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonIconCheckEnum, CommonIconPackageEnum, CommonIconSizeEnum } from '@data-access-common';


@Component({
  selector: 'prive-landing-private-wealth',
  templateUrl: './wealth.component.html',
  styleUrls: ['./wealth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingPrivateShellUIWealthComponent {
  public readonly IconPackage = CommonIconPackageEnum;
  public readonly IconSize = CommonIconSizeEnum;
  public readonly IconCheck = CommonIconCheckEnum;

  public digitalTypes = [
    'Fund advisory, management services with private family offices.',
    'Fund advisory, management services from the private digital asset management wing of large scale financial institutions.',
    'Private wealth / digital assets management solutions platforms, like <span class="text-prive-blue-400 b3 xl:b1-medium sm:text-prive-neutral-50">Coinhako Privé</span>, that provide you with the necessary tools to effectively manage your digital assets.'
  ];

  public descriptions = [
    'Private wealth management traditionally refers to an aggregate of investment and financial advisory practices catered specifically to high net-worth individuals. With the growth of digital assets over the years, there has been a growing need for similar services in the digital assets industry.',
    'Unlike traditional private wealth management, the range of private digital assets management services varies more, and in many cases, extends to institutions and corporate entities with a significant amount of digital asset holdings as well.'
  ]
}
