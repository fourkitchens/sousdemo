import siteFooterTwig from './site-footer.twig';

import footerNavData from '../../navigation/footer/footer.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Site/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Footer = () => siteFooterTwig({ ...footerNavData });
