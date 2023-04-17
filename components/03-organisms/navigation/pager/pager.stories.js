import pagerTwig from './pager.twig';
import pagerData from './pager.yml';
import pagerNextData from './pager-next.yml';
import pagerPrevData from './pager-prev.yml';
import pagerMiniData from './pager-mini.yml';
import './pager';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Navigation/Pager' };

export const pager = () => `
  <div class="cl-grouping-example">
    <h3>Pager:</h3>
    ${pagerTwig(pagerData)}
  </div>
  <div class="cl-grouping-example">
    <h3>Pager with next:</h3>
    ${pagerTwig(pagerNextData)}
  </div>
  <div class="cl-grouping-example">
    <h3>Pager with previous:</h3>
    ${pagerTwig(pagerPrevData)}
  </div>
  <div class="cl-grouping-example">
    <h3>Mini Pager:</h3>
    ${pagerTwig(pagerMiniData)}
  </div>
`;
