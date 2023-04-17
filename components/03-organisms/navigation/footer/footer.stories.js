// Markup.
import footerNavTwig from './footer.twig';

// Data.
import footerNavData from './footer.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Navigation/Footer' };

export const Footer = () => footerNavTwig(footerNavData);
