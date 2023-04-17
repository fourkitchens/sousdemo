Drupal.behaviors.pager = {
  attach(context) {
    // Provides accessible friendly text for pagers.
    const breadcrumbNav = context.querySelectorAll('.pager-nav');

    breadcrumbNav.forEach((nav) => {
      const breadcrumbItems = nav.querySelectorAll('.pager-nav__item');

      breadcrumbItems.forEach((item) => {
        const childLink = item.firstElementChild;
        const ariaText = `Page ${childLink.textContent}`;

        if (!childLink.getAttribute('aria-label')) {
          childLink.setAttribute('aria-label', ariaText);
        }
        if (childLink.textContent === '...') {
          childLink.setAttribute('aria-label', 'More Pages');
        }
      });
    });
  },
};
