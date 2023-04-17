// Component Twig
import containerTwig from './container.twig';

import containerBaseData from './container-base.yml';

import colors from '../../_data/colors.yml';

// Menu Location
export default {
  title: 'Templates/Container',
  argTypes: {
    componentTheme: {
      control: {
        type: 'select',
        options: colors.accent,
      },
      defaultValue: 'inherit',
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    width: {
      control: {
        type: 'select',
        options: {
          'Content Small': 'compressed',
          'Content Medium': 'standard',
          'Content Large': 'extended',
        },
      },
      defaultValue: 'standard',
    },
    spacing: {
      control: {
        type: 'select',
        options: {
          '0x Spacing': 'no-spacing',
          '1x Spacing': '',
          '2x Spacing': 'two-spacing',
        },
      },
      defaultValue: '',
    },
    alignment: {
      name: 'Component Alignment',
      options: ['left', 'center', 'right'],
      type: 'select',
      defaultValue: 'left',
    },
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: 'Container Heading Placeholder',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'Container content placeholder text',
    },
  },
};

// Component Examples
export const container = ({
  componentTheme,
  backgroundColor,
  width,
  spacing,
  alignment,
  heading,
  text,
}) =>
  containerTwig({
    ...containerBaseData,
    container__theme: componentTheme,
    container__bg_color: backgroundColor,
    container__component_width: width,
    container__modifiers: [spacing],
    container__component_alignment: alignment,
    container__heading: heading,
    container__text: text,
  });
