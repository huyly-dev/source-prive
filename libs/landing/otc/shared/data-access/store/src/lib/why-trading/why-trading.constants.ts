import { PriveLandingOtcWhyTradingState } from './why-trading.state';

export const landingOtcWhyTradingInitialState: PriveLandingOtcWhyTradingState = {
  reasons: [
    {
      title: 'Need for deeper liquidity',
      description: 'Lets say you have a large amount of cryptocurrency of some 10,000 BTC or so, sourcing for enough liquidity through an exchange to convert this amount into another currency or asset would probably present itself as a challenge.'
          + '<br /> <br />' + 'By connecting with OTC traders or OTC trading desks, you are able to tap into their network of crypto investors, sellers and liquidity providers, to gather deeper liquidity for your trade. As a result, you will not only get better prices for your trade, but also be able to save a significant amount of time to complete it.',
      imgSrc: 'prive-assets/images/landing/need-for-deeper-liquidity.png',
      imgAlt: 'Need for deeper liquidity',
      imgState: 'scaleOut',
      textState: 'expanded'
    },
    {
      title: 'Confidentiality',
      description: 'As explained, OTC trading is usually a private 1 to 1 affair. Rarely would a third party come to have any knowledge of the trade or have any involvement in it, thereby allowing the involved parties to enjoy privacy with their trading activities.',
      imgSrc: 'prive-assets/images/landing/confidentiality.png',
      imgAlt: 'Confidentiality',
      imgState: 'scaleIn',
      textState: 'collapsed'
    },
    {
      title: 'Direct contact',
      description: 'OTC trades are more personable than trading over exchanges as both parties would have to be in direct contact to complete the trade. As a result, parties involved in the OTC trade would be able to keep track of and trace one another, thereby reducing the risk of dealing with scams that act through third parties.',
      imgSrc: 'prive-assets/images/landing/direct-contact.png',
      imgAlt: 'Direct contact',
      imgState: 'scaleIn',
      textState: 'collapsed'
    },
  ],
  currentActive: 0,
  isLgScreen: true,
  ratio: {
    xAxis: 3.125,
    yAxis: 3.125,
    scaleUpRatio: 1.8,
    scaleDownRatio: 1
  }
};
