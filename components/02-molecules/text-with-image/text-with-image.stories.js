// Twig templates
import textWithImageTwig from './text-with-image.twig';

// Data files
import imageData from '../../01-atoms/images/image/image.yml';
import textWithImageData from './text-with-image.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Text With Image',
  argTypes: {
    position: {
      name: 'Image Position',
      type: 'select',
      options: {
        Left: 'left',
        Right: 'right',
      },
      defaultValue: 'left',
    },
    focus: {
      name: 'Component Focus',
      control: {
        type: 'select',
        options: {
          Equal: 'equal',
          Image: 'image',
          Text: 'text',
        },
      },
      defaultValue: 'equal',
    },
    heading: {
      name: 'Heading',
      type: 'string',
      defaultValue: textWithImageData.text_with_image__heading,
    },
    text: {
      name: 'Text',
      type: 'string',
      defaultValue: textWithImageData.text_with_image__text,
    },
    linkContent: {
      name: 'Link Content (optional)',
      type: 'string',
      defaultValue: textWithImageData.text_with_image__link__content,
    },
  },
};

export const TextWithImage = ({
  position,
  focus,
  heading,
  text,
  linkContent,
}) =>
  textWithImageTwig({
    ...imageData.responsive_images['3x2'],
    text_with_image__position: position,
    text_with_image__focus: focus,
    text_with_image__heading: heading,
    text_with_image__text: text,
    text_with_image__link__content: linkContent,
    text_with_image__link__url: textWithImageData.text_with_image__link__url,
  });
