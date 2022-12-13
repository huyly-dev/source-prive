import { LandingOtcHowState } from './how.state';

export const landingOtcHowInitialState: LandingOtcHowState = {
  stepActivated: 5,
  stepItems: [
    {
      step: 1,
      description: 'Fill up our <span class="text-prive-blue-400">Contact-us form</span>. Share with us your crypto OTC trading needs like trade pair, volume and other relevant details for us to serve you better.'
    },
    {
      step: 2,
      description: 'A member from our team will get in touch with you within 24 hours to sort out the application process. '
    },
    {
      step: 3,
      description: 'Sign up for a Coinhako Privé / Coinhako.com account if you do not have one.'
    },
    {
      step: 4,
      description: 'Allow our team to process your application.'
    },
    {
      step: 5,
      description: 'Start using our OTC trading service upon approval of your application.'
    },
  ]
};
