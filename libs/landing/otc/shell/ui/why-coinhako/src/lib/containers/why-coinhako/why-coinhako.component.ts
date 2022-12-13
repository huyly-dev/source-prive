import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prive-landing-otc-why-coinhako',
  templateUrl: './why-coinhako.component.html',
  styleUrls: ['./why-coinhako.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingOtcShellUIWhyCoinhakoComponent {
  public images = [
    {
      title: 'Deeper and guaranteed liquidity',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-1.jpg',
      description: 'Our trading desk works with multiple liquidity providers to ensure there is enough liquidity to fill your OTC trades at any point in time.'
    },
    {
      title: 'Competitive pricing',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-2.jpg',
      description: 'Our trading desk sources for the best pricing for your OTC trades from multiple sources to ensure you receive only the best rates.'
    },
    {
      title: 'Personalised service with our team of industry experts',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-3.jpg',
      description: 'Enjoy world class cryptocurrency and digital asset services, guidance, and industry insights, from dedicated OTC experts at Coinhako Privé. From the initial consultation to the execution of trade, we work with you to answer all your questions and build a long lasting relationship.'
    },
    {
      title: 'OTC trading with low counter-party risk',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-4.jpg',
      description: 'The Coinhako brand name is renowned in the world of digital assets and cryptocurrencies, having served the Asian market since 2014. Trading with our OTC desk means trading with a reputable institution which you can trust to fulfil your OTC trade orders.'
    },
    {
      title: 'Multi crypto access via Coinhako.com',
      imageSrc: 'prive-assets/images/landing/why-do-otc trading-5.jpg',
      description: 'Our trading desk supports OTC trading for multiple cryptocurrencies, like Bitcoin, Ethereum, and more, with fiat currencies and other supported cryptocurrencies.' +
          '<br /> <br />' +
          'A minimum trade size of S$100,000 is required to make an OTC trade for any cryptocurrency that is unsupported on Coinhako Privé and only Coinhako.com.'
    },
  ];
}
