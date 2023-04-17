import gridTwig from './grid.twig';
import gridData from './grid.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Templates/Grid',
  argTypes: {
    columnNumber: {
      control: {
        type: 'select',
      },
      options: ['1', '2', '3', '4'],
      defaultValue: '2',
    },
    gridSeparators: {
      name: 'Item Separators',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    gridSpacing: {
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
  },
};

export const grid = ({ columnNumber, gridSeparators, gridSpacing }) =>
  gridTwig({
    ...gridData,
    grid__columns: columnNumber,
    grid__separators: gridSeparators,
    grid__spacing: gridSpacing,
  });
