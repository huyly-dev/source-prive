import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingCarouselSliderItem } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-private-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingPrivateShellUIDigitalComponent {
  public images: LandingCarouselSliderItem[] = [
    {
      title: 'World-class digital asset portfolio management tools',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-4.jpg',
      description: 'We saved only the best for our esteemed clients at Coinhako Privé.' +
        '<br> <br>' +
        'Our wallet infrastructure allows for more sophisticated security protocols, dynamic real-time price feeds, agile movement of large sums of funds and much more.'
    },
    {
      title: ' Personalised service with our team of industry experts',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-1.jpg',
      description: 'Managing your digital assets on Coinhako Privé is more than just another service because we know you deserve better.' +
        '<br> <br>' +
        'Build a valuable and long lasting relationship with our dedicated team of digital asset experts while also enjoying world class cryptocurrency and digital asset services, guidance, and industry insights.'
    },
    {
      title: 'Tap into a more sophisticated trading engine for deeper liquidity',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-2.jpg',
      description: 'We understand that Coinhako Privé clients have a need to process larger trade sizes more regularly. Our trading engine was built to support such volumes and provide the liquidity needed to fill up such trading orders.'
    },
    {
      title: 'Competitive pricing and zero fee trading',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-6.jpg',
      description: 'Our trading desk sources for the best pricing from multiple sources to ensure you receive only the best rates. Coinhako Privé clients also trade with zero fees to further compliment this.' +
        '<br> <br>' +
        'Coinhako Privé clients can also <strong>enjoy 0.5% trading fees</strong> for tokens traded on Coinhako.com.'
    },
    {
      title: 'Multi crypto support',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-5.jpg',
      description: 'Coinhako Privé supports multiple cryptocurrencies, like Bitcoin, Ethereum, and more, with fiat currencies and other supported cryptocurrencies.'
    },
    {
      title: 'Access to Coinhako over-the-counter (OTC) trading desk',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-7.jpg',
      description: 'Coinhako Privé customers can <a href="http://prive.coinhako.com/otc-trading" target="_blank" rel="noopener noreferrer" class="text-blue-600 visited:text-purple-600 font-semibold">enjoy access to our OTC trading desk</a> for trades worth more than S$100,000 and cryptocurrencies that are unsupported on Coinhako Privé, but support on Coinhako.com'
    },
  ];
}
