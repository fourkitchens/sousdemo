Drupal.behaviors.tabs = {
  attach(context) {
    const el = context.querySelectorAll('.tabs-sous');
    const tabNavigationLinks = context.querySelectorAll('.tab-sous__link');
    const tabContentContainers = context.querySelectorAll('.tabs-sous__tab');
    let activeIndex = 0;
    const active = 'is-active';

    /**
     * goToTab
     * @description Goes to a specific tab based on index. Returns nothing.
     * @param {Number} index The index of the tab to go to
     */
    function goToTab(index) {
      if (
        index !== activeIndex &&
        index >= 0 &&
        index <= tabNavigationLinks.length
      ) {
        tabNavigationLinks[Number(activeIndex)].classList.remove(active);
        tabNavigationLinks[Number(index)].classList.add(active);
        tabContentContainers[Number(activeIndex)].classList.remove(active);
        tabContentContainers[Number(index)].classList.add(active);
        activeIndex = index;
      }
    }

    /**
     * handleClick
     * @description Handles click event listeners on each of the links in the
     *   tab navigation. Returns nothing.
     * @param {HTMLElement} link The link to listen for events on
     * @param {Number} index The index of that link
     */
    function handleClick(link, index) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        goToTab(index);
      });
    }

    /**
     * init
     * @description Initializes the component by removing the no-js class from
     *   the component, and attaching event listeners to each of the nav items.
     *   Returns nothing.
     */
    el.forEach((e) => {
      e.classList.remove('no-js');
    });

    tabNavigationLinks.forEach((link, i) => {
      handleClick(link, i);
    });
  },
};
