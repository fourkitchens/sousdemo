Drupal.behaviors.mainNav = {
  attach(context) {
    // Selectors
    const body = context.querySelector('body');
    const menu = context.querySelector('#main-nav');
    const menuList = context.querySelector(
      '#main-nav > .main-nav__menu-list-wrapper > .main-nav__menu-list',
    );
    const utility = context.querySelector('.utility_nav__menu-list');
    const siteHeader = context.querySelector('.site-header');
    // Primary toggle for the whole menu tree.
    const menuPrimaryToggle = context.querySelector('#main-nav > button');

    if (menuPrimaryToggle) {
      // Clone utility into the correct location for mobile.
      if (utility) {
        const utilityClone = utility.cloneNode(true);
        menuList.after(utilityClone);
      }
      // scroll down to the main menu if alerts are present.
      menuPrimaryToggle.addEventListener('click', () => {
        if (!siteHeader.classList.contains('stuck')) {
          context.querySelector('.site-header + div').scrollIntoView(true, {
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
        }
        // Prevent body scrolling when menu it active.
        body.toggleAttribute('data-body-frozen');
      });
    }

    // Hide menu when escape key press.
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        if (menuPrimaryToggle && menu.matches('[aria-expanded="true"]')) {
          menuPrimaryToggle.click();
        }
      }
    });

    window.addEventListener('click', (e) => {
      if (menu && !menu.contains(e.target)) {
        // Reset any open levels.
        Array.from(document.getElementsByClassName(`${menu.id}__item`)).forEach(
          (g) => g.classList.remove('sub--open'),
        );
        // Reset all aria-expanded.
        Array.prototype.forEach.call(
          menu.querySelectorAll(`button, [href], [tabindex]`),
          (i) => {
            i.setAttribute('aria-expanded', 'false');
          },
        );
      }
    });
  },
};
