import link from './link.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' };

export const links = () => `
  <div class="cl-container">
    <h2 class="heading">Links on a normal background</h2>
    <div class="cl-spacing-small">
      ${link({
        link__url: '#',
        link__content: 'This is a default link',
        link__attributes: {
          target: '_blank',
        },
      })}
    </div>
    <div class="cl-spacing-small">
      ${link({
        link__url: '#',
        link__content: 'This is a "no-underline" link',
        link__style: 'no-underline',
      })}
    </div>
    <div class="cl-spacing-small">
      ${link({
        link__url: '#',
        link__content: 'This is a "arrow" link',
        link__style: 'arrow-right',
      })}
    </div>
  </div>
  <div class="cl-container" data-component-theme="inherit inverse">
    <h2 class="heading">Links on an inverted background</h2>
    <div class="cl-spacing-small">
    ${link({
      link__url: '#',
      link__content: 'This is a default link',
      link__attributes: {
        target: '_blank',
      },
    })}</div>
    <div class="cl-spacing-small">
    ${link({
      link__url: '#',
      link__content: 'This is a "no-underline" link',
      link__style: 'no-underline',
    })}</div>
    <div class="cl-spacing-small">
    ${link({
      link__url: '#',
      link__content: 'This is a "arrow" link',
      link__style: 'arrow-right',
    })}</div>
  </div>
 `;
