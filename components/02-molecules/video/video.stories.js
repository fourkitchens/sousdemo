import videoTwig from './video.twig';

import videoData from './video.yml';

/**

* Storybook Definition.

*/

export default {
  title: 'Molecules/Video',
  argTypes: {
    width: {
      name: 'Component Width',
      options: ['compressed', 'standard'],
      type: 'select',
      defaultValue: 'compressed',
    },

    heading: {
      name: 'Heading',
      type: 'string',
      defaultValue: videoData.video__heading,
    },

    text: {
      name: 'text',
      type: 'string',
      defaultValue: videoData.video__text,
    },
  },
};

export const video = ({ width, heading, text }) =>
  videoTwig({
    video__width: width,
    video__heading: heading,
    video__text: text,
    ...videoData,
  });
