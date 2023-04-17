// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'Smith College',
  brandUrl: 'https://smith.edu',
  brandImage:
    'https://dev-smithcolleged9-4k.pantheonsite.io/themes/custom/smith/assets/images/smith-logo.svg',
});
