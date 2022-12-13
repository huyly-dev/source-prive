import { LandingAboutState } from './about.state';

export const landingAboutInitialState: LandingAboutState = {
  titleLinear: false,
  cards: [
    {
      avatar: 'prive-assets/images/landing/mathew.png',
      logo: 'prive-assets/images/landing/ether-scan.png',
      position: 'Founder',
      name: 'Mathew Tan',
      opinion: 'I consider the Hako team as one of the most trusted crypto brokerages in the region and they provide an easy way for buying and selling crypto.',
      extraClass: 'xl:w-[17.5rem] lg:w-[17.5rem] left-10 xl:-top-[2.75rem] lg:-top-[2.75rem]',
      markClass: 'top-0 right-15'
    },
    {
      avatar: 'prive-assets/images/landing/bobby.png',
      logo: 'prive-assets/images/landing/coin-gecko.png',
      position: 'Co-Founder',
      name: 'Bobby Ong',
      opinion: 'Coinhako is the easiest way to buy and sell cryptocurrencies, and we have been using them since 2014!',
      extraClass: 'xl:w-[23.5rem] lg:w-[19rem] xl:-top-[10.75rem] lg:-top-[10.75rem] right-0',
      markClass: 'top-0 right-6'
    },
    {
      avatar: 'prive-assets/images/landing/adam.png',
      logo: 'prive-assets/images/landing/boost-vc.png',
      position: 'Managing Director',
      name: 'Adam Draper',
      opinion: 'Coinhako is the best (Blockchain) company coming out of Singapore. That is why we picked them.',
      extraClass: 'xl:w-[19.375rem] lg:w-[17.5rem] xl:h-[16.875rem] bottom-0 xl:right-[4.125rem] lg:right-[1.5rem]',
      markClass: 'top-0 xl:right-22.5 right-15'
    }
  ]
}
