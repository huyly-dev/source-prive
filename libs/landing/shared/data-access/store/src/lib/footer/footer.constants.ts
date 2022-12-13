import { LandingFooterState } from './footer.state';
import { contactSections, extraSections, socials } from '@landing-shared-utils-constants';

export const landingFooterInitialState: LandingFooterState = {
  contact: contactSections,
  extra: extraSections,
  socials
};
