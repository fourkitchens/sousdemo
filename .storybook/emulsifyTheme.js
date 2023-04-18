// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'Sous',
  brandUrl: 'https://emulsify.info',
  brandImage:
    '/themes/custom/sousdemo/assets/images/sous.svg',
});
