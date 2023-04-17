Drupal.behaviors.siteHeader = {
  attach() {
    const siteHeader = document.querySelector('.site-header');

    if (siteHeader) {
      const el = document.querySelector('.site-header__main');
      const rect = el.getBoundingClientRect();

      const createObserver = () => {
        const options = {
          root: null,
          trackVisibility: true,
          delay: 100,
          threshold: [1],
        };

        const handler = () => {
          siteHeader.classList.toggle('stuck', window.scrollY >= rect.top);
        };

        if ('IntersectionObserver' in window) {
          const observer = new window.IntersectionObserver(handler, options);
          observer.observe(el);
        }
      };

      window.addEventListener(
        'scroll',
        () => {
          createObserver();
        },
        {
          passive: true,
        },
      );
    }
  },
};
