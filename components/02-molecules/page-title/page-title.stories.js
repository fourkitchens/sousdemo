// Twig templates
import pageTitleTwig from './page-title.twig';

// Data files
import pageTitleData from './page-title.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Page Title',
  argTypes: {
    pageTitleBackgroundColor: {
      name: 'Background Color',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    pageTitleSeparator: {
      name: 'separator',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    pageTitleImage: {
      name: 'Image',
      type: 'select',
      options: {
        None: 'none',
        Small: 'small',
        Large: 'large',
      },
      defaultValue: 'none',
    },
    pageTitleHeading: {
      name: 'Heading',
      type: 'string',
      defaultValue: pageTitleData.page_title__heading,
    },
    pageTitleSubHeading: {
      name: 'Subheading',
      type: 'string',
      defaultValue: pageTitleData.page_title__subheading,
    },
    pageTitleContent: {
      name: 'Content',
      type: 'string',
      defaultValue: pageTitleData.page_title__content,
    },
  },
};

export const PageTitle = ({
  pageTitleBackgroundColor,
  pageTitleSeparator,
  pageTitleImage,
  pageTitleHeading,
  pageTitleSubHeading,
  pageTitleContent,
}) => `
<script src="https://unpkg.com/css-has-pseudo@5.0.2/dist/browser-global.js"></script>
<script>cssHasPseudo(document)</script>

  ${pageTitleTwig({
    ...pageTitleData,
    page_title__bg: pageTitleBackgroundColor,
    page_title__separator: pageTitleSeparator,
    page_title__image: pageTitleImage,
    page_title__heading: pageTitleHeading,
    page_title__subheading: pageTitleSubHeading,
    page_title__content: pageTitleContent,
  })}`;
