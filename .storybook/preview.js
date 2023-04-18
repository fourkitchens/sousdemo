import { makeDecorator } from '@storybook/addons';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';

// GLOBAL CSS
import '../dist/css/style.css';

// Component Library specific styles
import '../dist/css/cl-style.css';

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';

makeDecorator((storyFn) => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return storyFn();
});

setupTwig(Twig);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Smith',
        ['Intro', '*'],
        'Base',
        ['Readme', '*'],
        'Atoms',
        ['Readme', '*'],
        'Molecules',
        ['Readme', '*'],
        'Organisms',
        ['Readme', '*'],
      ],
      locales: 'en-US',
    },
  },
};