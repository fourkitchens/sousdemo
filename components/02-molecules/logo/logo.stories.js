// Twig templates
import logoTwig from './logo.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Logo' };

export const Text = () =>
  logoTwig({
    logo__type: 'text',
  });
export const Informal = () =>
  `<div class="cl-spacing-small">
    ${logoTwig({
      logo__type: 'informal',
    })}
  </div>`;
