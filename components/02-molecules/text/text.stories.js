// Twig templates
import textFieldTwig from './text-field.twig';

// Data files
import textData from './text-field.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Text',
};

export const Text = ({ position }) =>
  textFieldTwig({
    ...textData,
    text_field__position: position,
  });
