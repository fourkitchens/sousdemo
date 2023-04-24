import tabs from './tabs.twig';

import tabData from './tabs.yml';

import './tabs';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Tabs' };

export const HorizontalBlock = () => tabs(tabData.horizontalBlock);
export const HorizontalPlain = () => tabs(tabData.horizontalPlain);
export const Vertical = () => tabs(tabData.vertical);
