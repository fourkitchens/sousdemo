// Markup.
import breadcrumbsTwig from './breadcrumbs.twig';

// Data.
import breadcrumbsData from './breadcrumbs.yml';

// JavaScript.
import './breadcrumbs';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Navigation/Breadcrumbs' };

export const Breadcrumbs = () => `
  <div class="cl-grouping-example-large">
    ${breadcrumbsTwig(breadcrumbsData)}
  </div>
`;
