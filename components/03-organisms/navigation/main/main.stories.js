// Markup.
import mainNavTwig from './main.twig';

// Data.
import mainNavData from './main.yml';

// JavaScript
import '../../../02-molecules/navigation/menu-toggle/menu-toggle';
import './main';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Navigation/Main' };

export const Main = () => mainNavTwig(mainNavData);
