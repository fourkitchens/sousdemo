import listTwig from './list.twig';

import listData from './list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const UnorderedList = () => `
  <div class="cl-container"><div class="text-field">
    ${listTwig({ list__items: listData.unordered__list__items })}
  </div></div>
`;
export const OrderedList = () => `
<div class="cl-container"><div class="text-field">
  ${listTwig({ list__items: listData.ordered__list__items, list__type: 'ol' })}
</div></div>
`;
