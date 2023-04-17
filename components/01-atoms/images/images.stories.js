import image from './image/image.twig';
import iconTwig from './icons/icons.twig';
import imageData from './image/image.yml';
import figureData from './image/figure.yml';

import './image/cl-image.scss';
import './icons/cl-icons.scss';

const svgIcons = require.context('../../../assets/icons/', true, /\.svg$/);

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Images' };

export const images = () => `
  <h2>Aspect Ratios</h2>
  <p>These are the current aspect ratios that we use in components that require a programmatic crop.</p>
  <div class="cl-image-examples">
    <div class="cl-image-example">
    <h2>1:1</h2>
    ${image(imageData.responsive_images['1x1'])}
    </div>
  </div>
  <div class="cl-image-examples">
    <div class="cl-image-example">
    <h2>4x3</h2>
    ${image(imageData.responsive_images['4x3'])}
    </div>
  </div>
  <div class="cl-image-examples">
    <div class="cl-image-example">
    <h2>3:2</h2>
    ${image(imageData.responsive_images['3x2'])}
    </div>
  </div>
  <div class="cl-image-examples">
    <div class="cl-image-example">
    <h2>16x9</h2>
    ${image(imageData.responsive_images['16x9'])}
    </div>
  </div>
`;

export const figures = () => image(figureData);

const items = [];
svgIcons.keys().forEach((key) => {
  const iconName = svgIcons(key)
    .split('static/media/')
    .pop()
    .split('icons/')
    .pop()
    .split('.')[0];
  const icon = {};
  icon.value = iconName;
  items.push(icon);
});

export const icons = () => iconTwig({ items });
