import siteHeaderTwig from './site-header.twig';

import mainData from '../../navigation/main/main.yml';
import '../../../02-molecules/navigation/menu-toggle/menu-toggle';

import './site-header';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Site/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Header = () =>
  siteHeaderTwig({
    ...mainData,
    site_name: 'Sous Starter',
  });
